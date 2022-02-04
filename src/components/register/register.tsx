import {
   Container,
   BodyForm,
   LampGreen,
   LampPurple,
   BodyTitle,
   Form,
   FormContainer,
   FormInput,
   FormBtn,
} from './register.styled'

export const Register = () => {
   return(
      <Container>
         <BodyForm>
            <LampGreen />
            <LampPurple />
            <BodyTitle>Are you ready to start your journey?</BodyTitle>
            <Form>
               <FormContainer>
                  <FormInput type="email" name="EMAIL" placeholder="Email Address" value=""  />
                  <FormBtn>Register</FormBtn>
               </FormContainer>
            </Form>
         </BodyForm>
      </Container>
   )
}