import { StateContext } from '../store/DataProvider';
import { useCallback, useContext, useState } from 'react';
import { createClient, getClients } from '../services/api';

const useClientHook = (fieldGroups: any[]) => {
	const { state, dispatch } = useContext(StateContext);
	const { clientDetails } = state;
	const [newClientDetails, setNewClientDetails] = useState(clientDetails);
	const [errorBag, setErrorBag] = useState({});
	const [validated, setValidated] = useState(false);

	const inputOnChange = (name: string, value: string) => {
		setNewClientDetails({ ...newClientDetails, [name]: value });
	};

	const validatePhone = (phone: string) => {
		const regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/g;
		const digits = phone.replace('/\D/g', '');

		return regex.test(digits);
	};

	const validateEmail = (email: string) => {
		const regex = /\S+@\S+\.\S+/;

		return regex.test(email);
	};

	const validateField = (rules: any, fieldValue: string): string => {
		let error = '';
		console.log(validatePhone(fieldValue));
		if (rules.required) {
			if (fieldValue === '') {
				error = 'Field is required';
				return error;
			}
		}

		if (rules.validate) {
			if (rules.validate === 'phone') {
				if (!validatePhone(fieldValue)) {
					error = 'Must be a valid 10 digit phone number';
				}
			} else if (rules.validate === 'email') {
				if (!validateEmail(fieldValue)) {
					error = 'Must be a validate email address';
				}
			}
		}

		return error;
	};

	const validateForm = (activeStep: number) => {
		const activeFieldGroup = Object.keys(fieldGroups[activeStep]);
		let errors = {};
		activeFieldGroup.forEach((index: string) => {
			const validation = validateField(fieldGroups[activeStep][index], newClientDetails[index as keyof IClient]);
			if (validation !== '') {
				errors = {
					...errors,
					[index]: validation,
				};
			}
		});

		setErrorBag(errors);
		setValidated(true);
	};

	const submit = useCallback(() => {
		createClient(newClientDetails).then((client) => {
			if (client !== null ) {
				setValidated(false);
				setNewClientDetails(clientDetails);
				getClients().then((clients) =>
					dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }),
				);
			}
		});
	}, [newClientDetails, dispatch]);

	return {
		data: newClientDetails,
		inputOnChange,
		validateForm,
		errorBag,
		validated,
		submit,
	};
};

export default useClientHook;