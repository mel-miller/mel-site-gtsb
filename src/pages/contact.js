import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/SEO'

const FormField = styled.div`
  margin-top: 20px;
`
const FormFieldShort = styled.div`
  margin-top: 20px;
  max-width: 300px;
`
const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  display: block;
  padding-bottom: 5px;
`
const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.grayLight};
  font-size: 14px;

  &:focus {
    border: 1px solid ${props => props.theme.orange};
    outline: none;
  }
`
const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.grayLight};
  font-size: 14px;

  &:focus {
    border: 1px solid ${props => props.theme.orange};
    outline: none;
  }
`
const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: white;
  background: ${props => props.theme.blue};
  margin-top: 30px;

  &:focus {
    outline: 1px dotted black;
    outline-offset: 2px;
  }

  &:hover {
    color: ${props => props.theme.blue};
    background: ${props => props.theme.blueLight};
  }

  &:active {
    box-shadow: inset 0px 0px 3px ${props => props.theme.blue};
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`, `drupal developer`, `designer`]} />
    <h1>Contact Me</h1>
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="bot-field" />
      <FormFieldShort>
        <Label for="name">Name</Label>
        <Input name="name" type="text"/>
      </FormFieldShort>
      <FormFieldShort>
        <Label for="email">Email</Label>
        <Input name="email" type="email"/>
      </FormFieldShort>
      <FormField>
        <Label for="message">Message</Label>
        <Textarea name="message" rows="6" />
      </FormField>
      <Button>Submit</Button>
    </form>
  </Layout>
)

export default ContactPage
