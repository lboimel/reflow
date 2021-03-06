import { ViewInterface } from "@mcesystems/reflow";
import Contact from "./shared/Contact";

export type ContactListEntry = { id: string; } & Contact

export interface Input {
	title: string;
	contacts: ContactListEntry[];
}

export interface Events {
	editContact: {
		id: string
	}
	newContact: {}
}

export default interface ContactsList extends ViewInterface<Input, Events> { }
