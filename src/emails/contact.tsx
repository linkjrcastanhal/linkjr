import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ContactEmailProps {
  name: string
  email: string
  message: string
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>{name} entrou em contato com LinkJr</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerParagraph}>
            {name} &lt;{email}&gt;
          </Text>
        </Section>
        <Text style={paragraph}>{message}</Text>
        <Hr style={hr} />
        <Text style={footer}>
          © 2024 LinkJR. Todos os direitos reservados.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ContactEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const headerParagraph = {
  fontSize: '18px',
  lineHeight: '20px',
  color: 'white',
  fontWeight: '800',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const header = {
  background: '#CD5C08',
  padding: '20px',
}

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
}
