import * as React from "react";
import { mount } from "@cypress/react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Search from "../../../components/Search";
import Spinner from "../../../components/Spinner";

describe("Home components testing", () => {
	it("Header", () => {
		mount(<Header />);
	});
	it("Footer", () => {
		mount(<Footer />);
		cy.get("small").contains("© website 2022").should("be.visible");
	});
	it("Nav", () => {
		mount(<Nav />);
	});
	it("Search", () => {
		mount(<Search />);
		cy.get("input")
			.focus()
			.invoke("attr", "placeholder")
			.should("contain", "Looking for something?");
	});
	it("Spinner", () => {
		mount(<Spinner />);
		cy.get("#loading");
	});
});
