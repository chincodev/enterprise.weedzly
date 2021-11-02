import React from 'react';
import NavbarSaasLandingTwo from '../components/_App/NavbarSaasLandingTwo';
import MainBanner from '../components/MainBanner';
import Services from '../components/Services';
import Features from '../components/Features';
import MobileApp from '../components/MobileApp';
import Pricing from '../components/Pricing';
import FunFacts from '../components/FunFacts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FooterSaasLandingTwo from '../components/_App/FooterSaasLandingTwo';
import { dispensaryService } from '../services';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask'
import Swal from 'sweetalert2'
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SaasLanding2 = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })

    const initialValues = {
        person_name: '',
		phone: '',
		email: '',
		name: '',
		type: '',
		address: '',
        address_line_2: '',
        addresszip: '',
		city: '',
		state: '',
		website: '',
		licenseType: '',
        license: '',
        acceptTerms: false
    };

    const validationSchema = Yup.object().shape({

        person_name: Yup.string()
            .min(5, "Minimum 5 symbols")
 			.max(50, "Maximum 50 symbols")
            .required('Person name is required'),

        phone: Yup.string()
            .min(10, "Minimum 10 symbols")
 			.max(20, "Maximum 20 symbols")
            .required('Phone is required'),

        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),

        name: Yup.string()
            .min(3, "Minimum 3 symbols")
 			.max(100, "Maximum 100 symbols")
            .required('Business name is required'),
        
        type: Yup.string()
            .min(5, "Minimum 5 symbols")
 			.max(20, "Maximum 20 symbols")
            .required('Business type is required'),

        address: Yup.string()
            .min(5, "Minimum 5 symbols")
            .max(100, "Maximum 100 symbols")
            .required('Address is required'),

        address_line_2: Yup.string()
            .max(100, "Maximum 100 symbols"),
          
        addresszip: Yup.string()
            .min(3, "Minimum 3 symbols")
 			.max(10, "Maximum 10 symbols")
            .required('Zip code is required'),
        
        website: Yup.string()
            .min(8, "Minimum 8 symbols")
 			.max(50, "Maximum 50 symbols"),

        licenseType: Yup.string()
            .min(5, "Minimum 5 symbols")
 			.max(50, "Maximum 50 symbols")
            .required('License type is required'),

        license: Yup.string()
            .min(5, "Minimum 5 symbols")
 			.max(20, "Maximum 20 symbols")
            .required('License is required'),

        city: Yup.string()
            .min(1, "Minimum 1 symbols")
 			.max(50, "Maximum 50 symbols")
            .required('City is required'),

        state: Yup.string()
            .min(1, "Minimum 1 symbols")
 			.max(50, "Maximum 30 symbols")
            .required('State is required'),

        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')

    });

    function onSubmit(fields, { setStatus, setSubmitting }) {

        setStatus();
        let payload = Object.assign({}, fields)
        payload.isPickupServiceAvailable = payload.type ==="DISPENSARY" ? true : false,
        payload.isDeliveryServiceAvailable = payload.type ==="DELIVERY" ? true : false,
        payload.pendingData = {
            person_name: payload.person_name,
            phone: payload.phone,
            email: payload.email,
            city: payload.city,
            state: payload.state
        }
        payload.licenses = [{
                licenseType: payload.licenseType,
                license: payload.license
        }]

        delete payload.person_name
        delete payload.phone
        delete payload.email
        delete payload.city
        delete payload.state
        delete payload.licenseType
        delete payload.license
        delete payload.acceptTerms

        dispensaryService.createRequest(Object.assign(payload))
            .then(() => {
                Toast.fire({
                    icon: 'success',
                    title: 'You have sucessfully registered your business, a representative will contact you soon.'
                })
                setSubmitting(false);
                // router.push('/')
            })
            .catch(error => {
                console.log(error.data)
                setSubmitting(false);
                Toast.fire({
                    icon: 'warning',
                    title: error.message || error.errors[0]['message'],
                })
            });
    }

    return (
        <>
            <NavbarSaasLandingTwo selected='register' />
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched, isSubmitting, setFieldTouched, handleChange, setFieldValue, values }) => (
                    <>
                        <div id="register" className="service-style-two pt-100 text-light" style={{backgroundColor:'#7c58fc'}}>
                            <div className="container pt-100 pb-3">
                                <div className="section-title">
                                    <h2 className='text-light'>Business Registration</h2>
                                    <p>Fill out and submit the below form and a representative from our team will contact you within 24 hours. After we verify your business information, your business will be live on Weedzly.</p>
                                    <p>Only submit this application on behalf of a company that you represent.</p>
                                </div>
                            </div>
                        </div>
                        <div id="register-form" className='service-style-two features-style-two ' style={{marginBottom:'-125px'}}>
                            <div className="container pt-5 pb-3">
                                <h3 className='mb-4'>User Information</h3>
                                <Form className="signup-form contact-form-area">
                                    <div className='row'>
                                        <div className='col col-sm-12'>
                                            <div className="form-group">
                                                <label htmlFor='person_name' className="form-label">Name</label>
                                                <Field id='person_name' name="person_name" type="text" placeholder="Enter name" className={'form-control' + (errors.person_name && touched.person_name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="person_name" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col col-md-6 col-sm-12'>
                                            <div className="form-group">
                                                <label className="form-label">Phone number</label>
                                                <Field  name="phone"
								        	    	render={({ field, form }) => (
								        	    		<MaskedInput
                                                          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                                          placeholder="Enter phone number"
                                                          className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')} 
                                                    
                                                          {...field}
                                                          guide={true}

                                                          onBlur={setFieldTouched}
                                                          onChange={(e) => {
                                                            handleChange(e)
                                                            const value = e.target.value || '';
                                                            setFieldValue('phone', value);
                                                          }}
                                                        />
								        	    	)}
								        	    	type="text"  
								        	    />
                                                <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <Field name="email" type="text" placeholder="Enter email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Business Information</h3>
                                <div className='row'>   
                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">                    
                                            <div className="form-group">
                                                <label className="form-label">Entity Name</label>
                                                <Field name="name" type="text" placeholder="Enter entity name" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">
                                            <label className="form-label">Business Type</label>
                                            <Field as="select" type="text" placeholder="Enter business type" name='type' className={'form-control' + (errors.type && touched.type ? ' is-invalid' : '')} >
                                                <option value=''>Select a business type</option>
                                                <option value='DISPENSARY'>Dispensary</option>
                                                <option value='DELIVERY'>Delivery</option>
                                                <option value='BRAND'>Cannabis brand</option>
                                                {/* <option value='DOCTOR'>Doctor</option> */}
                                            </Field>
                                            <ErrorMessage name="type" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>

                                </div>   
                                {/* {   
                                    values.type!='DELIVERY' &&  */}
                                    <>
                                        <div className="form-group">
                                            <label className="form-label">Address Line 1</label>
                                            <Field name="address" type="text" placeholder="Enter address line 1" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Address Line 2</label>
                                            <Field name="address_line_2" type="text" placeholder="Enter address line 2" className={'form-control' + (errors.address_line_2 && touched.address_line_2 ? ' is-invalid' : '')} />
                                            <ErrorMessage name="address_line_2" component="div" className="invalid-feedback" />
                                        </div>
                                    </>
                                {/* }                       */}

                                <div className='row'>   
                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">
                                            <label className="form-label">City</label>
                                            <Field name="city" type="text" placeholder="Enter city" className={'form-control' + (errors.city && touched.city ? ' is-invalid' : '')} />
                                            <ErrorMessage name="city" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                             
                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">
                                            <label className="form-label">State</label>
                                            <Field name="state" type="text" placeholder="Enter state" className={'form-control' + (errors.state && touched.state ? ' is-invalid' : '')} />
                                            <ErrorMessage name="state" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>

                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">
                                            <label className="form-label">ZIP Code</label>
                                            <Field name="addresszip" type="text" placeholder="Enter zip code" className={'form-control' + (errors.addresszip && touched.addresszip ? ' is-invalid' : '')} />
                                            <ErrorMessage name="addresszip" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>   
                                 
                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">
                                            <label className="form-label">License Type</label>
                                            <Field as="select" type="text" placeholder="Enter license type" name='licenseType' className={'form-control' + (errors.licenseType && touched.licenseType ? ' is-invalid' : '')} >
                                            <option value="">Select license type</option>
                    {/* <option value="Recreational Cultivation">Recreational Cultivation</option>
                    <option value="Recreational Mfg.">Recreational Mfg.</option> */}
                    <option value="Recreational Nonstorefront">Recreational Nonstorefront</option>
                    <option value="Recreational Retail">Recreational Retail</option>
                    {/* <option value="Medical Cultivation">Medical Cultivation</option>
                    <option value="Medical Mfg.">Medical Mfg.</option> */}
                    <option value="Medical Nonstorefront">Medical Nonstorefront</option>
                    <option value="Medical Retail">Medical Retail</option>
                    <option value="Microbusiness">Microbusiness</option>
                    <option value="Adult Use Storefront">Adult Use Storefront</option>
                    <option value="Adult Use Non-Storefront">Adult Use Non-Storefront</option>
                    <option value="I-71">I-71</option>
                    {/* <option value="Testing Lab">Testing Lab</option>
                    <option value="Event">Event</option>
                    <option value="Distributor">Distributor</option> */}
                                            </Field>
                                            <ErrorMessage name="licenseType" component="div" className="invalid-feedback" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 col-12'>
                                        <div className="form-group">                    
                                            <div className="form-group">
                                                <label className="form-label">License #</label>
                                                <Field name="license" type="text" placeholder="Enter license #" className={'form-control' + (errors.license && touched.license ? ' is-invalid' : '')} />
                                                <ErrorMessage name="license" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <label className="form-label">Website</label>
                                    <Field name="website" type="text" placeholder="Enter website" className={'form-control' + (errors.website && touched.website ? ' is-invalid' : '')} />
                                    <ErrorMessage name="website" component="div" className="invalid-feedback" />
                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <Field type="checkbox" id="newsletter-signup" name="acceptTerms" className={'custom-control-input mr-1' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                        <label htmlFor="newsletter-signup" className="mr-2  custom-control-label form-check-label pl-2">&nbsp;Accept Terms & Conditions</label>
                                        <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                                    </div>
                                </div>
                                <div className='feature-text d-flex justify-content-end'>

                                    <button type="submit" disabled={isSubmitting} className="feature-btn-a">
                                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                        ADD BUSINESS
                                    </button>
                                </div>
                               

                              
                                </Form>
                            </div>
                            <hr/>
                        </div>
                        
                    </>
                )}
                </Formik>
            <FooterSaasLandingTwo />
        </>
    )
}

export default SaasLanding2;