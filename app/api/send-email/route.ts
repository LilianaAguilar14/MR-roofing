export async function POST(req: Request) {
  const API_URL = "https://smtp.maileroo.com/send"
  const API_KEY = process.env.MAILEROO_API_KEY

  try {
    const { firstName, lastName, email, phone, message } = await req.json()

    const html = `
      <h2>New Estimate Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

    const params = new URLSearchParams()
    params.append("from", `M&R Roofing <noreply@4d514366cc9de8ca.maileroo.org>`)
    params.append("to", `Matias <matias.73cruz@gmail.com>`)
    params.append("subject", "New Estimate Request")
    params.append("html", html)
    params.append("plain", `New estimate request from ${firstName} ${lastName}, email: ${email}, phone: ${phone}`)

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY ?? "",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    const result = await response.json()
    console.log("Respuesta de Maileroo:", result)

    return new Response(JSON.stringify(result), {
      status: response.ok ? 200 : 500,
    })
  } catch (error: any) {
    console.error("ERROR GENERAL:", error.message)
    return new Response(
      JSON.stringify({ error: "Error sending email", detail: error.message }),
      { status: 500 }
    )
  }
}
