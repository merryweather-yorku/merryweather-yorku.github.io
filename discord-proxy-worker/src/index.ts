export interface Env {
	// This variable will be injected securely via Cloudflare Secrets
	DISCORD_WEBHOOK_URL: string;
}

const corsHeaders = {
	"Access-Control-Allow-Origin": "*", // Or specify your domain e.g., "https://merryweather-yorku.github.io"
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type",
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// 1. Handle CORS Preflight requests
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: corsHeaders,
			});
		}

		// 2. Only allow POST requests
		if (request.method !== "POST") {
			return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
		}

		try {
			// 3. Parse the JSON sent from your React app
			const { name, email, company, message } = await request.json() as { name: string, email: string, company: string, message: string };

			if (!name || !email || !company || !message) {
				return new Response("Missing required fields", { status: 400, headers: corsHeaders });
			}

			const formattedMessage = `**New Contact Form Submission**\n**Name:** ${name}\n**Email:** ${email}\n**Company/Organization:** ${company}\n**Message:**\n${message}`;

			// 4. Send the data to Discord using the Secret Webhook URL
			const discordResponse = await fetch(env.DISCORD_WEBHOOK_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				// Discord expects the text to be inside the "content" field
				body: JSON.stringify({
					content: formattedMessage,
				}),
			});

			if (!discordResponse.ok) {
				throw new Error(`Discord responded with ${discordResponse.status}`);
			}

			// 5. Respond back to your React app
			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: {
					...corsHeaders,
					"Content-Type": "application/json",
				},
			});

		} catch (error) {
			console.error(error);
			return new Response("Internal Server Error", { status: 500, headers: corsHeaders });
		}
	},
};
