import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      console.warn("SLACK_WEBHOOK_URL is not defined in environment variables.");
      return NextResponse.json({ success: true, warning: "Webhook URL not set" });
    }

    const message = {
      text: `🚨 *New Beta Waitlist Signup!*`,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🚨 New Beta Waitlist Signup!",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*📧 Work Email:*\n\`${email}\``,
            },
            {
              type: "mrkdwn",
              text: `*⏰ Time:*\n<!date^${Math.floor(Date.now() / 1000)}^{date_short_pretty} at {time}|Just now>`,
            },
          ],
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: "🌐 *Source:* NexaWorks Beta Waitlist Portal",
            },
          ],
        },
      ],
    };

    const response = await fetch(slackWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Slack API error:", errText);
      return NextResponse.json({ error: "Slack API error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Slack notification error:", error);
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
