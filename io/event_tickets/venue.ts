/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/event_tickets/venue.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../google/protobuf/timestamp";
import * as dependency_2 from "./../common/localization";
import * as dependency_3 from "./../common/proximity";
import * as dependency_4 from "./../../protoc-gen-openapiv2/options/annotations";
import * as pb_1 from "google-protobuf";
export namespace event_tickets {
    export class Venue extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            uid?: string;
            name?: string;
            localizedName?: dependency_2.io.LocalizedString;
            address?: string;
            localizedAddress?: dependency_2.io.LocalizedString;
            timezone?: string;
            gpsCoords?: dependency_3.io.GPSLocation[];
            eventUrls?: EventUrls;
            room?: string;
            created?: dependency_1.google.protobuf.Timestamp;
            updated?: dependency_1.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [8], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("uid" in data && data.uid != undefined) {
                    this.uid = data.uid;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("localizedName" in data && data.localizedName != undefined) {
                    this.localizedName = data.localizedName;
                }
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("localizedAddress" in data && data.localizedAddress != undefined) {
                    this.localizedAddress = data.localizedAddress;
                }
                if ("timezone" in data && data.timezone != undefined) {
                    this.timezone = data.timezone;
                }
                if ("gpsCoords" in data && data.gpsCoords != undefined) {
                    this.gpsCoords = data.gpsCoords;
                }
                if ("eventUrls" in data && data.eventUrls != undefined) {
                    this.eventUrls = data.eventUrls;
                }
                if ("room" in data && data.room != undefined) {
                    this.room = data.room;
                }
                if ("created" in data && data.created != undefined) {
                    this.created = data.created;
                }
                if ("updated" in data && data.updated != undefined) {
                    this.updated = data.updated;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get uid() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set uid(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get localizedName() {
            return pb_1.Message.getWrapperField(this, dependency_2.io.LocalizedString, 4) as dependency_2.io.LocalizedString;
        }
        set localizedName(value: dependency_2.io.LocalizedString) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get hasLocalizedName() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get localizedAddress() {
            return pb_1.Message.getWrapperField(this, dependency_2.io.LocalizedString, 6) as dependency_2.io.LocalizedString;
        }
        set localizedAddress(value: dependency_2.io.LocalizedString) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get hasLocalizedAddress() {
            return pb_1.Message.getField(this, 6) != null;
        }
        get timezone() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set timezone(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get gpsCoords() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.io.GPSLocation, 8) as dependency_3.io.GPSLocation[];
        }
        set gpsCoords(value: dependency_3.io.GPSLocation[]) {
            pb_1.Message.setRepeatedWrapperField(this, 8, value);
        }
        get eventUrls() {
            return pb_1.Message.getWrapperField(this, EventUrls, 11) as EventUrls;
        }
        set eventUrls(value: EventUrls) {
            pb_1.Message.setWrapperField(this, 11, value);
        }
        get hasEventUrls() {
            return pb_1.Message.getField(this, 11) != null;
        }
        get room() {
            return pb_1.Message.getFieldWithDefault(this, 12, "") as string;
        }
        set room(value: string) {
            pb_1.Message.setField(this, 12, value);
        }
        get created() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 9) as dependency_1.google.protobuf.Timestamp;
        }
        set created(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 9, value);
        }
        get hasCreated() {
            return pb_1.Message.getField(this, 9) != null;
        }
        get updated() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 10) as dependency_1.google.protobuf.Timestamp;
        }
        set updated(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 10, value);
        }
        get hasUpdated() {
            return pb_1.Message.getField(this, 10) != null;
        }
        static fromObject(data: {
            id?: string;
            uid?: string;
            name?: string;
            localizedName?: ReturnType<typeof dependency_2.io.LocalizedString.prototype.toObject>;
            address?: string;
            localizedAddress?: ReturnType<typeof dependency_2.io.LocalizedString.prototype.toObject>;
            timezone?: string;
            gpsCoords?: ReturnType<typeof dependency_3.io.GPSLocation.prototype.toObject>[];
            eventUrls?: ReturnType<typeof EventUrls.prototype.toObject>;
            room?: string;
            created?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            updated?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
        }): Venue {
            const message = new Venue({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.uid != null) {
                message.uid = data.uid;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.localizedName != null) {
                message.localizedName = dependency_2.io.LocalizedString.fromObject(data.localizedName);
            }
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.localizedAddress != null) {
                message.localizedAddress = dependency_2.io.LocalizedString.fromObject(data.localizedAddress);
            }
            if (data.timezone != null) {
                message.timezone = data.timezone;
            }
            if (data.gpsCoords != null) {
                message.gpsCoords = data.gpsCoords.map(item => dependency_3.io.GPSLocation.fromObject(item));
            }
            if (data.eventUrls != null) {
                message.eventUrls = EventUrls.fromObject(data.eventUrls);
            }
            if (data.room != null) {
                message.room = data.room;
            }
            if (data.created != null) {
                message.created = dependency_1.google.protobuf.Timestamp.fromObject(data.created);
            }
            if (data.updated != null) {
                message.updated = dependency_1.google.protobuf.Timestamp.fromObject(data.updated);
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                uid?: string;
                name?: string;
                localizedName?: ReturnType<typeof dependency_2.io.LocalizedString.prototype.toObject>;
                address?: string;
                localizedAddress?: ReturnType<typeof dependency_2.io.LocalizedString.prototype.toObject>;
                timezone?: string;
                gpsCoords?: ReturnType<typeof dependency_3.io.GPSLocation.prototype.toObject>[];
                eventUrls?: ReturnType<typeof EventUrls.prototype.toObject>;
                room?: string;
                created?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
                updated?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.uid != null) {
                data.uid = this.uid;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.localizedName != null) {
                data.localizedName = this.localizedName.toObject();
            }
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.localizedAddress != null) {
                data.localizedAddress = this.localizedAddress.toObject();
            }
            if (this.timezone != null) {
                data.timezone = this.timezone;
            }
            if (this.gpsCoords != null) {
                data.gpsCoords = this.gpsCoords.map((item: dependency_3.io.GPSLocation) => item.toObject());
            }
            if (this.eventUrls != null) {
                data.eventUrls = this.eventUrls.toObject();
            }
            if (this.room != null) {
                data.room = this.room;
            }
            if (this.created != null) {
                data.created = this.created.toObject();
            }
            if (this.updated != null) {
                data.updated = this.updated.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.uid.length)
                writer.writeString(2, this.uid);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (this.hasLocalizedName)
                writer.writeMessage(4, this.localizedName, () => this.localizedName.serialize(writer));
            if (this.address.length)
                writer.writeString(5, this.address);
            if (this.hasLocalizedAddress)
                writer.writeMessage(6, this.localizedAddress, () => this.localizedAddress.serialize(writer));
            if (this.timezone.length)
                writer.writeString(7, this.timezone);
            if (this.gpsCoords.length)
                writer.writeRepeatedMessage(8, this.gpsCoords, (item: dependency_3.io.GPSLocation) => item.serialize(writer));
            if (this.hasEventUrls)
                writer.writeMessage(11, this.eventUrls, () => this.eventUrls.serialize(writer));
            if (this.room.length)
                writer.writeString(12, this.room);
            if (this.hasCreated)
                writer.writeMessage(9, this.created, () => this.created.serialize(writer));
            if (this.hasUpdated)
                writer.writeMessage(10, this.updated, () => this.updated.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Venue {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Venue();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.uid = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.localizedName, () => message.localizedName = dependency_2.io.LocalizedString.deserialize(reader));
                        break;
                    case 5:
                        message.address = reader.readString();
                        break;
                    case 6:
                        reader.readMessage(message.localizedAddress, () => message.localizedAddress = dependency_2.io.LocalizedString.deserialize(reader));
                        break;
                    case 7:
                        message.timezone = reader.readString();
                        break;
                    case 8:
                        reader.readMessage(message.gpsCoords, () => pb_1.Message.addToRepeatedWrapperField(message, 8, dependency_3.io.GPSLocation.deserialize(reader), dependency_3.io.GPSLocation));
                        break;
                    case 11:
                        reader.readMessage(message.eventUrls, () => message.eventUrls = EventUrls.deserialize(reader));
                        break;
                    case 12:
                        message.room = reader.readString();
                        break;
                    case 9:
                        reader.readMessage(message.created, () => message.created = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 10:
                        reader.readMessage(message.updated, () => message.updated = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Venue {
            return Venue.deserialize(bytes);
        }
    }
    export class EventUrls extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sellURL?: string;
            transferURL?: string;
            bagPolicyURL?: string;
            orderFoodURL?: string;
            merchandiseURL?: string;
            transitInformationURL?: string;
            parkingInformationURL?: string;
            directionsInformationURL?: string;
            accessibilityURL?: string;
            purchaseParkingURL?: string;
            addOnURL?: string;
            contactVenueEmail?: string;
            contactVenueWebsite?: string;
            contactVenuePhoneNumber?: string;
            portalUrl?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sellURL" in data && data.sellURL != undefined) {
                    this.sellURL = data.sellURL;
                }
                if ("transferURL" in data && data.transferURL != undefined) {
                    this.transferURL = data.transferURL;
                }
                if ("bagPolicyURL" in data && data.bagPolicyURL != undefined) {
                    this.bagPolicyURL = data.bagPolicyURL;
                }
                if ("orderFoodURL" in data && data.orderFoodURL != undefined) {
                    this.orderFoodURL = data.orderFoodURL;
                }
                if ("merchandiseURL" in data && data.merchandiseURL != undefined) {
                    this.merchandiseURL = data.merchandiseURL;
                }
                if ("transitInformationURL" in data && data.transitInformationURL != undefined) {
                    this.transitInformationURL = data.transitInformationURL;
                }
                if ("parkingInformationURL" in data && data.parkingInformationURL != undefined) {
                    this.parkingInformationURL = data.parkingInformationURL;
                }
                if ("directionsInformationURL" in data && data.directionsInformationURL != undefined) {
                    this.directionsInformationURL = data.directionsInformationURL;
                }
                if ("accessibilityURL" in data && data.accessibilityURL != undefined) {
                    this.accessibilityURL = data.accessibilityURL;
                }
                if ("purchaseParkingURL" in data && data.purchaseParkingURL != undefined) {
                    this.purchaseParkingURL = data.purchaseParkingURL;
                }
                if ("addOnURL" in data && data.addOnURL != undefined) {
                    this.addOnURL = data.addOnURL;
                }
                if ("contactVenueEmail" in data && data.contactVenueEmail != undefined) {
                    this.contactVenueEmail = data.contactVenueEmail;
                }
                if ("contactVenueWebsite" in data && data.contactVenueWebsite != undefined) {
                    this.contactVenueWebsite = data.contactVenueWebsite;
                }
                if ("contactVenuePhoneNumber" in data && data.contactVenuePhoneNumber != undefined) {
                    this.contactVenuePhoneNumber = data.contactVenuePhoneNumber;
                }
                if ("portalUrl" in data && data.portalUrl != undefined) {
                    this.portalUrl = data.portalUrl;
                }
            }
        }
        get sellURL() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set sellURL(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get transferURL() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set transferURL(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get bagPolicyURL() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set bagPolicyURL(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get orderFoodURL() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set orderFoodURL(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get merchandiseURL() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set merchandiseURL(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get transitInformationURL() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set transitInformationURL(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get parkingInformationURL() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set parkingInformationURL(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get directionsInformationURL() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set directionsInformationURL(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        get accessibilityURL() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set accessibilityURL(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get purchaseParkingURL() {
            return pb_1.Message.getFieldWithDefault(this, 10, "") as string;
        }
        set purchaseParkingURL(value: string) {
            pb_1.Message.setField(this, 10, value);
        }
        get addOnURL() {
            return pb_1.Message.getFieldWithDefault(this, 11, "") as string;
        }
        set addOnURL(value: string) {
            pb_1.Message.setField(this, 11, value);
        }
        get contactVenueEmail() {
            return pb_1.Message.getFieldWithDefault(this, 12, "") as string;
        }
        set contactVenueEmail(value: string) {
            pb_1.Message.setField(this, 12, value);
        }
        get contactVenueWebsite() {
            return pb_1.Message.getFieldWithDefault(this, 13, "") as string;
        }
        set contactVenueWebsite(value: string) {
            pb_1.Message.setField(this, 13, value);
        }
        get contactVenuePhoneNumber() {
            return pb_1.Message.getFieldWithDefault(this, 14, "") as string;
        }
        set contactVenuePhoneNumber(value: string) {
            pb_1.Message.setField(this, 14, value);
        }
        get portalUrl() {
            return pb_1.Message.getFieldWithDefault(this, 15, "") as string;
        }
        set portalUrl(value: string) {
            pb_1.Message.setField(this, 15, value);
        }
        static fromObject(data: {
            sellURL?: string;
            transferURL?: string;
            bagPolicyURL?: string;
            orderFoodURL?: string;
            merchandiseURL?: string;
            transitInformationURL?: string;
            parkingInformationURL?: string;
            directionsInformationURL?: string;
            accessibilityURL?: string;
            purchaseParkingURL?: string;
            addOnURL?: string;
            contactVenueEmail?: string;
            contactVenueWebsite?: string;
            contactVenuePhoneNumber?: string;
            portalUrl?: string;
        }): EventUrls {
            const message = new EventUrls({});
            if (data.sellURL != null) {
                message.sellURL = data.sellURL;
            }
            if (data.transferURL != null) {
                message.transferURL = data.transferURL;
            }
            if (data.bagPolicyURL != null) {
                message.bagPolicyURL = data.bagPolicyURL;
            }
            if (data.orderFoodURL != null) {
                message.orderFoodURL = data.orderFoodURL;
            }
            if (data.merchandiseURL != null) {
                message.merchandiseURL = data.merchandiseURL;
            }
            if (data.transitInformationURL != null) {
                message.transitInformationURL = data.transitInformationURL;
            }
            if (data.parkingInformationURL != null) {
                message.parkingInformationURL = data.parkingInformationURL;
            }
            if (data.directionsInformationURL != null) {
                message.directionsInformationURL = data.directionsInformationURL;
            }
            if (data.accessibilityURL != null) {
                message.accessibilityURL = data.accessibilityURL;
            }
            if (data.purchaseParkingURL != null) {
                message.purchaseParkingURL = data.purchaseParkingURL;
            }
            if (data.addOnURL != null) {
                message.addOnURL = data.addOnURL;
            }
            if (data.contactVenueEmail != null) {
                message.contactVenueEmail = data.contactVenueEmail;
            }
            if (data.contactVenueWebsite != null) {
                message.contactVenueWebsite = data.contactVenueWebsite;
            }
            if (data.contactVenuePhoneNumber != null) {
                message.contactVenuePhoneNumber = data.contactVenuePhoneNumber;
            }
            if (data.portalUrl != null) {
                message.portalUrl = data.portalUrl;
            }
            return message;
        }
        toObject() {
            const data: {
                sellURL?: string;
                transferURL?: string;
                bagPolicyURL?: string;
                orderFoodURL?: string;
                merchandiseURL?: string;
                transitInformationURL?: string;
                parkingInformationURL?: string;
                directionsInformationURL?: string;
                accessibilityURL?: string;
                purchaseParkingURL?: string;
                addOnURL?: string;
                contactVenueEmail?: string;
                contactVenueWebsite?: string;
                contactVenuePhoneNumber?: string;
                portalUrl?: string;
            } = {};
            if (this.sellURL != null) {
                data.sellURL = this.sellURL;
            }
            if (this.transferURL != null) {
                data.transferURL = this.transferURL;
            }
            if (this.bagPolicyURL != null) {
                data.bagPolicyURL = this.bagPolicyURL;
            }
            if (this.orderFoodURL != null) {
                data.orderFoodURL = this.orderFoodURL;
            }
            if (this.merchandiseURL != null) {
                data.merchandiseURL = this.merchandiseURL;
            }
            if (this.transitInformationURL != null) {
                data.transitInformationURL = this.transitInformationURL;
            }
            if (this.parkingInformationURL != null) {
                data.parkingInformationURL = this.parkingInformationURL;
            }
            if (this.directionsInformationURL != null) {
                data.directionsInformationURL = this.directionsInformationURL;
            }
            if (this.accessibilityURL != null) {
                data.accessibilityURL = this.accessibilityURL;
            }
            if (this.purchaseParkingURL != null) {
                data.purchaseParkingURL = this.purchaseParkingURL;
            }
            if (this.addOnURL != null) {
                data.addOnURL = this.addOnURL;
            }
            if (this.contactVenueEmail != null) {
                data.contactVenueEmail = this.contactVenueEmail;
            }
            if (this.contactVenueWebsite != null) {
                data.contactVenueWebsite = this.contactVenueWebsite;
            }
            if (this.contactVenuePhoneNumber != null) {
                data.contactVenuePhoneNumber = this.contactVenuePhoneNumber;
            }
            if (this.portalUrl != null) {
                data.portalUrl = this.portalUrl;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sellURL.length)
                writer.writeString(1, this.sellURL);
            if (this.transferURL.length)
                writer.writeString(2, this.transferURL);
            if (this.bagPolicyURL.length)
                writer.writeString(3, this.bagPolicyURL);
            if (this.orderFoodURL.length)
                writer.writeString(4, this.orderFoodURL);
            if (this.merchandiseURL.length)
                writer.writeString(5, this.merchandiseURL);
            if (this.transitInformationURL.length)
                writer.writeString(6, this.transitInformationURL);
            if (this.parkingInformationURL.length)
                writer.writeString(7, this.parkingInformationURL);
            if (this.directionsInformationURL.length)
                writer.writeString(8, this.directionsInformationURL);
            if (this.accessibilityURL.length)
                writer.writeString(9, this.accessibilityURL);
            if (this.purchaseParkingURL.length)
                writer.writeString(10, this.purchaseParkingURL);
            if (this.addOnURL.length)
                writer.writeString(11, this.addOnURL);
            if (this.contactVenueEmail.length)
                writer.writeString(12, this.contactVenueEmail);
            if (this.contactVenueWebsite.length)
                writer.writeString(13, this.contactVenueWebsite);
            if (this.contactVenuePhoneNumber.length)
                writer.writeString(14, this.contactVenuePhoneNumber);
            if (this.portalUrl.length)
                writer.writeString(15, this.portalUrl);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EventUrls {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EventUrls();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sellURL = reader.readString();
                        break;
                    case 2:
                        message.transferURL = reader.readString();
                        break;
                    case 3:
                        message.bagPolicyURL = reader.readString();
                        break;
                    case 4:
                        message.orderFoodURL = reader.readString();
                        break;
                    case 5:
                        message.merchandiseURL = reader.readString();
                        break;
                    case 6:
                        message.transitInformationURL = reader.readString();
                        break;
                    case 7:
                        message.parkingInformationURL = reader.readString();
                        break;
                    case 8:
                        message.directionsInformationURL = reader.readString();
                        break;
                    case 9:
                        message.accessibilityURL = reader.readString();
                        break;
                    case 10:
                        message.purchaseParkingURL = reader.readString();
                        break;
                    case 11:
                        message.addOnURL = reader.readString();
                        break;
                    case 12:
                        message.contactVenueEmail = reader.readString();
                        break;
                    case 13:
                        message.contactVenueWebsite = reader.readString();
                        break;
                    case 14:
                        message.contactVenuePhoneNumber = reader.readString();
                        break;
                    case 15:
                        message.portalUrl = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EventUrls {
            return EventUrls.deserialize(bytes);
        }
    }
    export class VenueLimitedFieldsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            id?: string;
            uid?: string;
            name?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("id" in data && data.id != undefined) {
                    this.id = data.id;
                }
                if ("uid" in data && data.uid != undefined) {
                    this.uid = data.uid;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
            }
        }
        get id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get uid() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set uid(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            id?: string;
            uid?: string;
            name?: string;
        }): VenueLimitedFieldsResponse {
            const message = new VenueLimitedFieldsResponse({});
            if (data.id != null) {
                message.id = data.id;
            }
            if (data.uid != null) {
                message.uid = data.uid;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            return message;
        }
        toObject() {
            const data: {
                id?: string;
                uid?: string;
                name?: string;
            } = {};
            if (this.id != null) {
                data.id = this.id;
            }
            if (this.uid != null) {
                data.uid = this.uid;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.id.length)
                writer.writeString(1, this.id);
            if (this.uid.length)
                writer.writeString(2, this.uid);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): VenueLimitedFieldsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new VenueLimitedFieldsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.id = reader.readString();
                        break;
                    case 2:
                        message.uid = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): VenueLimitedFieldsResponse {
            return VenueLimitedFieldsResponse.deserialize(bytes);
        }
    }
}
