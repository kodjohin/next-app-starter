import styled from "styled-components";

const StyledSpinner = styled.div`
	--scrollbarBG: #eaecee;
	--thumbBG: #90a4ae;
	#loading {
		width: 30px;
		height: 30px;
		border: 3px solid var(--scrollbarBG);
		border-radius: 50%;
		border-top-color: var(--thumbBG);
		animation: spin 1s ease-in-out infinite;
		-webkit-animation: spin 1s ease-in-out infinite;
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;

const Spinner = () => {
	return (
		<StyledSpinner>
			<div id="loading"></div>
		</StyledSpinner>
	);
};

export default Spinner;
