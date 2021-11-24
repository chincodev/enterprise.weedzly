const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_ACCESS_TOKEN)
  const { email, message, subject, name } = req.body

  const content = {
      to: 'mike@weedzly.com',
      from: 'mike@weedzly.com',
      subject: subject,
      text: message,
      html: `<p>From <strong>${name}</strong></p><br></br><p>${message}<br><br/>Email: ${email}</p>`
  }

  try {
      await sgMail.send(content)
      res.status(200).send('Message sent successfully.')
  } catch (error) {
      res.status(400).send('Message not sent.')
  }
}