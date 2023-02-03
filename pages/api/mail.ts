import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string
}

const password = 'kykhsmvwijhxpydy'
const nodemailer = require('nodemailer')
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    // Process a POST request

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'EMAIL_GOES_HERE',
        pass: 'PASSWORD_GOES_HERE',
      },
    })
    const mailOptions = {
      from: 'EMAIL_GOES_HERE',
      to: 'TO_EMAIL_GOES_HERE',
      cc: 'CC_EMAIL_GOES_HERE',
      subject: 'RacquetBall Court Reservation',
      text: '',
    }
    const greeting = 'Hi Chris,\n \n'
    const footer =
      '\n\n Best Regards \nAbhinav \nNote : This email sent from a email account which not monitored, Please use reply all to notify to the person who sent you this email.'
    mailOptions.text = greeting + req.body.message + footer
    transporter.sendMail(
      mailOptions,
      (error: Data, info: { response: unknown }) => {
        if (error) {
          console.log(error)
          res.status(500).send(error)
        } else {
          console.log(`Email sent: ${info.response}`)
          res.status(200).json({ message: 'Email sent' })
        }
      }
    )
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

// q git add remote public
