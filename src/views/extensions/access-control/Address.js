// ** React Imports
import { Fragment, useState, useMemo, useEffect } from 'react'
import CountrySelector from './CountrySelector'
import { isObjEmpty, selectThemeColors } from '@utils'
import classnames from 'classnames'
import '@src/firebase'
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set, update } from "firebase/database"
// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import '@styles/react/libs/react-select/_react-select.scss'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const defaultValues = {
  city: '',
  zipcode: '',
  address: '',
  country: null
}

const Address = ({ stepper }) => {
  // ** Hooks
  // const [userData, setUserData] = useState(null)
  const auth = getAuth()
  const userId = auth?.currentUser?.uid
  const userData = JSON.parse(localStorage.getItem('userData'))
  const db = getDatabase()
  // useEffect(() => {
  //   if (isUserLoggedIn() !== null) {
  //     setUserData(JSON.parse(localStorage.getItem('userData')))
  //   }
  // }, [])
console.log(useEffect, userId)


const [data, setData] = useState(null)

const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {


     if (isObjEmpty(errors)) {
      stepper.next()
      // const {city, zipcode, address} = data
      // writeUserData(city, zipcode, address, data.country.value)
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual',
            message: `Please enter a valid ${key}`
          })
        } else {
          console.log(data)
          console.log(set)
          function writeUserData() {
      update(ref(db, `users/${userData?.email.split("@")[0]}/address`), data)
        .then(
          () => {
            console.log("done")
          }
        )
        .catch((error) => {
        console.log(error)
      })
    }
    writeUserData()

      setData(data)
        }
      }
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Address</h5>
        <small>Enter Your Address.</small>
      </div>
      <Form onSubmit={handleSubmit(data => onSubmit(data))}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='address'>
              Address
            </Label>
            <Controller
              // value={address}
              id='address'
              name='address'
              control={control}
              render={({ field }) => (
                <Input invalid={errors.address && true} {...field} />
              )}
            />
            {errors.address && <FormFeedback>{errors.address.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='city'>
              City
            </Label>
            <Controller
              // value={city}
              id='city'
              name='city'
              control={control}
              render={({ field }) => (
                <Input invalid={errors.city && true} {...field} />
              )}
            />
            {errors.city && <FormFeedback>{errors.city.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='zipcode'>
              Zipcode
            </Label>
            <Controller
              // value={zipcode}
              id='zipcode'
              name='zipcode'
              control={control}
              render={({ field }) => <Input maxLength='6' invalid={errors.zipcode && true} {...field} />}
            />
            {errors.zipcode && <FormFeedback>{errors.zipcode.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for='country'>
              Country
            </Label>
            <Controller
              // value={country}
              id='country'
              name='country'
              control={control}
              render={({ field }) => <Select theme={selectThemeColors} className={classnames('react-select', { 'is-invalid': data !== null && data.country === null })} options={options} value={value} onChange={changeHandler}
                  {...field}
                  />}
                  />
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Address
