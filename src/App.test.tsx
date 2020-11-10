import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import App from "./App";

const wrapper = ({ children }) => (
	<Provider store={store}>
			{children}
	</Provider>
);

test("renders New Project button", () => {
	const {debug} = render(<App />, { wrapper });
	const button = screen.getByText(/New Project/i);
	expect(button).toBeInTheDocument();
});
