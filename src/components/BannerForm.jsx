import React from 'react';
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BannerForm = () => {
    const { t } = useTranslation();

    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(/^0[0-9]+$/, t("phoneNumberInvalid")) // Must start with 0 and followed by numbers
            .min(2, t("phoneNumberTooShort")) // Minimum of 2 digits
            .max(15, t("phoneNumberTooLong")) // Maximum of 15 digits
            .required(t("phoneNumberRequired")), // Required field
    });

    return (
        <div className="flex w-full flex-wrap lg:gap-0 justify-center items-center bg-white">
            <Formik
                initialValues={{ phoneNumber: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // Handle form submission
                    console.log('Submitted phone number:', values.phoneNumber);
                }}
            >
                {({ errors, touched }) => (
                    <Form className=" w-full">
                        <div className="flex w-full flex-wrap lg:gap-0 justify-center boxanimated items-center">
                            <Field
                                type="text"
                                name="phoneNumber"
                                placeholder={t("EnterPhone")}
                                className={`flex flex-grow rounded-md lg:rounded-e-[0px] lg:h-10 h-8 py-2 px-3 ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : ''}`}
                            />
                            <button 
                                type="submit" 
                                className="bg-gradient-to-r from-[#21228E] lg:h-10 h-8 to-[#8485E6] text-white py-2 px-4 w-[120px] lg:rounded-s-[0px]  lg:w-auto w-full shadow-lg"
                            >
                                {t("call-me")}
                            </button>
                        </div>
                        {/* Error message displayed here after boxanimated div */}
                        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-xs block mt-1" />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BannerForm;