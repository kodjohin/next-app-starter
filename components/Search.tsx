import { useRouter } from "next/router";
import { useRef, KeyboardEvent, MutableRefObject, FC } from "react";
import styled from "styled-components";

const StyledSearh = styled.div`
	width: 350px;
	display: flex;
	justify-content: flex-end;
	input {
		background: rgba(128, 124, 124, 0.175)
			url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQBJREFUeNqslI0RgyAMhdENWIEVWMEVXIGO0BW6Ah2hHcGOoCPYEewINFzBe9IA9id37w4kfEZesHHOCSYUqSPJML+RJlELDwN1pMHxMZNMkr8RTgyz2YPH5LmtwXpIHkOFmKhIlxowDmYAycKnHAHYcTCsSpXOJCie6YWDnXKLGeHLN2stGaqDsXXrX3GFcYcLrfhjtKEhffQ792gYT2nT6pJDjCw4z7ZGdGipOIqNbXIwFUARmCbKpMfYxsWJBmCEDoW7+gYUTAU2s3HJrK3AJvMLkqGHFLgWXTckm+SfSQexs+tLRqwVfgvjgMsvMAT689S5M/sk/I14kO5PAQYAuk6L1q+EdHMAAAAASUVORK5CYII=)
			no-repeat 6px 5px;
		text-indent: 20px;
		display: inline-block;
		border: 0 none;
		width: 0;
		height: 30px;
		border-radius: 3em;
		-webkit-transition: 0.3s;
		transition: 0.3s;
		outline: none;
		padding: 12px 16px;
		cursor: pointer;
		appearance: none;
		font-weight: 400;
		font-size: inherit;
		font-family: inherit;
		color: var(--text-color);
		vertical-align: baseline;

		:hover,
		:focus {
			background: var(--bg-color)
				url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAT5JREFUeNqsVLtOw0AQtIMlRJHCEhUVMg398QEUSZnSfILzCXxDPsFu6XAJHWnTcS1lWsprKdmLxtKwvjVBYaTV7cm+udnX5fPb+yyBSmwhVmK/FfPZLyjUPhI8YtXYi23EOovs7PzyevAbsWeoGg5HNUHsCipX8F9TZDOstVgLPxIsxW6w3sHv6dJ2StkLbh6IPtR/AWRfSIET20H9D2U1hfaAgxY2KMagcBSmg9/rmwx0lBqTzGfHoVfVHxXgXzCjHNRHnnHke4vMGc2q0RBR0GSeCLlpLaJGFWKUszVuib32nih7iTFrjXAPyGnQ48c3Gu5AOVlMtMk6NZuf+FiC+AIhV0T+pBQ5ntXceIJKqKko2duJ2TwoLAz5QTVnagJaXWEO8y/wSMuKH9RTJoCTHyNZFidOUEfNu/8WYAAOXUT04MOtlwAAAABJRU5ErkJggg==)
				7px 7px no-repeat;
		}

		:focus {
			width: 100%;
			cursor: text;
		}
		::placeholder {
			font-size: 0.9em;
			font-weight: 300;
		}
	}
`;

const Search: FC = () => {
	const router = useRouter();
	const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

	const handleKeyDown = (e: KeyboardEvent) => {
		e.keyCode === 13 && search();
	};

	const search = () => {
		if (inputRef.current.value === "") return;
		const query = inputRef.current.value;
		// console.log(query);
		router.push({
			pathname: "/search",
			query: { keyword: `${query}` },
		});
	};

	return (
		<StyledSearh id="search">
			<input
				type="search"
				ref={inputRef}
				onKeyDown={(e) => handleKeyDown(e)}
				placeholder="Looking for something?"
			/>
		</StyledSearh>
	);
};

export default Search;
