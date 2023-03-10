// ** React Imports
import { useContext, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import image from '@src/assets/images/logo/favicon.png'
import { toast, Slide } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth'
import { getDatabase, ref, set, onValue } from "firebase/database"
import firebase from '../../../firebase'
import  '@src/firebase'
import ReCAPTCHA from 'react-google-recaptcha'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/authentication'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'

// ** Reactstrap Imports
import { Row, Col, CardTitle, CardText, Label, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

const defaultValues = {
  email: '',
  terms: false,
  username: '',
  password: ''
}
/*
 function onChange(value) {
  console.log("Captcha value:", value)
}
*/


const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title fw-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully register in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

 
const Register = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const { skin } = useSkin()
  const history = useHistory()
  const dispatch = useDispatch()
  const [recaptcha, setRecaptcha] = useState("")
   function onChange(value) {
  setRecaptcha(value)
}
  const {
    control,
    setError,
    handleOnChange = onChange,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const illustration = skin === 'dark' ? 'register-v2-dark.svg' : 'register-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default
  

  const onSubmit = data => {

    data.recaptcha = recaptcha 
    data.role = "admin"
    data.ability = [
        {
            action: "manage",
            subject: "all"
        }
    ]
  
       const auth = getAuth()
    const tempData = { ...data }
    delete tempData.terms
    if (Object.values(tempData).every(field => field.length > 0) && data.terms === true) {
      const { username, email, password } = data
        function writeUserData() {
      const db = getDatabase()
      set(ref(db, `users/${data.id}`), { ...data, revenue: { profit: 0, capital: 0 } })
    }
      const blah = { ability, history, createUserWithEmailAndPassword, sendEmailVerification, dispatch, useJwt, handleLogin, auth, username, email, password }
      if (false) {
        console.log(blah)
      }
        data.id = data.email.split("@")[0]
      data.accessToken = "mskmskmsk"
    const starCountRef = ref(firebase.database, `users/${data.id}`)
    onValue(starCountRef, (snapshot) => {
  const userExist = snapshot.val()
      if (!userExist) {
        writeUserData()
         ability.update(data.ability)
   toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={ 'admin'} />,
            { icon: false, transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
      dispatch(handleLogin(data))
        history.push(`/dashboard`)
        
      } else {
        toast.error(<div >This email {data.email} has already been</div>)
  }
  
})
  
    // console.log("THE DATA", data)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        }
        if (key === 'terms' && data.terms === false) {
          setError('terms', {
            type: 'manual'
          })
        }
      }
    }
  }

  return (
    <div className='auth-wrapper auth-cover'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
        <img src={image} alt='logo'/>
          <h2 className='brand-text text-primary ms-1'>Coin Mercari</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={source} alt='Login Cover' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='fw-bold mb-1'>
              Adventure starts here ????
            </CardTitle>
            <CardText className='mb-2'>Make your investment easy and fun!</CardText>

            <Form action='/' className='auth-register-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-1'>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <Controller
                  id='username'
                  name='username'
                  control={control}
                  render={({ field }) => (
                    <Input autoFocus placeholder='johndoe' invalid={errors.username && true} {...field} />
                  )}
                />
                {errors.username ? <FormFeedback>{errors.username.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <Controller
                  id='email'
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input type='email' placeholder='john@example.com' invalid={errors.email && true} {...field} />
                  )}
                />
                {errors.email ? <FormFeedback>{errors.email.message}</FormFeedback> : null}
              </div>
              <div className='mb-1'>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <Controller
                  id='password'
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                  )}
                />
              </div>
              <div className='form-check mb-1'>
                <Controller
                  name='terms'
                  control={control}
                  render={({ field }) => (
                    <Input {...field} id='terms' type='checkbox' checked={field.value} invalid={errors.terms && true} />
                  )}
                />
                <Label className='form-check-label' for='terms'>
                  I agree to
                  <a className='ms-25' href='https://coinmercari.com/index.html#whitepaper/' target='_blank' onClick={e => e.preventDefault()}>
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange = { handleOnChange }
               />
               <div>
               <br></br>
               </div>
              <Button type='submit' block color='primary' >
                Sign up
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
           
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
