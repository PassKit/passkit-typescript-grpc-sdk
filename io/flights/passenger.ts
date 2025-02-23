/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/flights/passenger.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./barcode";
import * as dependency_2 from "./../common/common_objects";
import * as dependency_3 from "./../common/personal";
import * as dependency_4 from "./../../protoc-gen-openapiv2/options/annotations";
import * as pb_1 from "google-protobuf";
export namespace flights {
    export enum IdentityDocument {
        PASSPORT = 0,
        NATIONAL_ID_CARD = 1,
        DRIVING_LICENSE = 2,
        CREDIT_CARD = 3,
        FREQUENT_FLYER_CARD = 4,
        OTHER_TRAVEL_DOCUMENT = 5
    }
    export class Passenger extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            passengerDetails?: dependency_3.io.Person;
            frequentFlyerInfo?: FrequentFlyerInfo;
            identityDetails?: IdentityDetails;
            withInfant?: boolean;
            infantDetails?: Infant;
            knownTravelerNumber?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("passengerDetails" in data && data.passengerDetails != undefined) {
                    this.passengerDetails = data.passengerDetails;
                }
                if ("frequentFlyerInfo" in data && data.frequentFlyerInfo != undefined) {
                    this.frequentFlyerInfo = data.frequentFlyerInfo;
                }
                if ("identityDetails" in data && data.identityDetails != undefined) {
                    this.identityDetails = data.identityDetails;
                }
                if ("withInfant" in data && data.withInfant != undefined) {
                    this.withInfant = data.withInfant;
                }
                if ("infantDetails" in data && data.infantDetails != undefined) {
                    this.infantDetails = data.infantDetails;
                }
                if ("knownTravelerNumber" in data && data.knownTravelerNumber != undefined) {
                    this.knownTravelerNumber = data.knownTravelerNumber;
                }
            }
        }
        get passengerDetails() {
            return pb_1.Message.getWrapperField(this, dependency_3.io.Person, 1) as dependency_3.io.Person;
        }
        set passengerDetails(value: dependency_3.io.Person) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get hasPassengerDetails() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get frequentFlyerInfo() {
            return pb_1.Message.getWrapperField(this, FrequentFlyerInfo, 2) as FrequentFlyerInfo;
        }
        set frequentFlyerInfo(value: FrequentFlyerInfo) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get hasFrequentFlyerInfo() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get identityDetails() {
            return pb_1.Message.getWrapperField(this, IdentityDetails, 3) as IdentityDetails;
        }
        set identityDetails(value: IdentityDetails) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get hasIdentityDetails() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get withInfant() {
            return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
        }
        set withInfant(value: boolean) {
            pb_1.Message.setField(this, 4, value);
        }
        get infantDetails() {
            return pb_1.Message.getWrapperField(this, Infant, 5) as Infant;
        }
        set infantDetails(value: Infant) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get hasInfantDetails() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get knownTravelerNumber() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set knownTravelerNumber(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        static fromObject(data: {
            passengerDetails?: ReturnType<typeof dependency_3.io.Person.prototype.toObject>;
            frequentFlyerInfo?: ReturnType<typeof FrequentFlyerInfo.prototype.toObject>;
            identityDetails?: ReturnType<typeof IdentityDetails.prototype.toObject>;
            withInfant?: boolean;
            infantDetails?: ReturnType<typeof Infant.prototype.toObject>;
            knownTravelerNumber?: string;
        }): Passenger {
            const message = new Passenger({});
            if (data.passengerDetails != null) {
                message.passengerDetails = dependency_3.io.Person.fromObject(data.passengerDetails);
            }
            if (data.frequentFlyerInfo != null) {
                message.frequentFlyerInfo = FrequentFlyerInfo.fromObject(data.frequentFlyerInfo);
            }
            if (data.identityDetails != null) {
                message.identityDetails = IdentityDetails.fromObject(data.identityDetails);
            }
            if (data.withInfant != null) {
                message.withInfant = data.withInfant;
            }
            if (data.infantDetails != null) {
                message.infantDetails = Infant.fromObject(data.infantDetails);
            }
            if (data.knownTravelerNumber != null) {
                message.knownTravelerNumber = data.knownTravelerNumber;
            }
            return message;
        }
        toObject() {
            const data: {
                passengerDetails?: ReturnType<typeof dependency_3.io.Person.prototype.toObject>;
                frequentFlyerInfo?: ReturnType<typeof FrequentFlyerInfo.prototype.toObject>;
                identityDetails?: ReturnType<typeof IdentityDetails.prototype.toObject>;
                withInfant?: boolean;
                infantDetails?: ReturnType<typeof Infant.prototype.toObject>;
                knownTravelerNumber?: string;
            } = {};
            if (this.passengerDetails != null) {
                data.passengerDetails = this.passengerDetails.toObject();
            }
            if (this.frequentFlyerInfo != null) {
                data.frequentFlyerInfo = this.frequentFlyerInfo.toObject();
            }
            if (this.identityDetails != null) {
                data.identityDetails = this.identityDetails.toObject();
            }
            if (this.withInfant != null) {
                data.withInfant = this.withInfant;
            }
            if (this.infantDetails != null) {
                data.infantDetails = this.infantDetails.toObject();
            }
            if (this.knownTravelerNumber != null) {
                data.knownTravelerNumber = this.knownTravelerNumber;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hasPassengerDetails)
                writer.writeMessage(1, this.passengerDetails, () => this.passengerDetails.serialize(writer));
            if (this.hasFrequentFlyerInfo)
                writer.writeMessage(2, this.frequentFlyerInfo, () => this.frequentFlyerInfo.serialize(writer));
            if (this.hasIdentityDetails)
                writer.writeMessage(3, this.identityDetails, () => this.identityDetails.serialize(writer));
            if (this.withInfant != false)
                writer.writeBool(4, this.withInfant);
            if (this.hasInfantDetails)
                writer.writeMessage(5, this.infantDetails, () => this.infantDetails.serialize(writer));
            if (this.knownTravelerNumber.length)
                writer.writeString(7, this.knownTravelerNumber);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Passenger {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Passenger();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.passengerDetails, () => message.passengerDetails = dependency_3.io.Person.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.frequentFlyerInfo, () => message.frequentFlyerInfo = FrequentFlyerInfo.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.identityDetails, () => message.identityDetails = IdentityDetails.deserialize(reader));
                        break;
                    case 4:
                        message.withInfant = reader.readBool();
                        break;
                    case 5:
                        reader.readMessage(message.infantDetails, () => message.infantDetails = Infant.deserialize(reader));
                        break;
                    case 7:
                        message.knownTravelerNumber = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Passenger {
            return Passenger.deserialize(bytes);
        }
    }
    export class FrequentFlyerInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            programName?: string;
            airlineDesignator?: string;
            number?: string;
            tier?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("programName" in data && data.programName != undefined) {
                    this.programName = data.programName;
                }
                if ("airlineDesignator" in data && data.airlineDesignator != undefined) {
                    this.airlineDesignator = data.airlineDesignator;
                }
                if ("number" in data && data.number != undefined) {
                    this.number = data.number;
                }
                if ("tier" in data && data.tier != undefined) {
                    this.tier = data.tier;
                }
            }
        }
        get programName() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set programName(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get airlineDesignator() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set airlineDesignator(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get number() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set number(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get tier() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set tier(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            programName?: string;
            airlineDesignator?: string;
            number?: string;
            tier?: string;
        }): FrequentFlyerInfo {
            const message = new FrequentFlyerInfo({});
            if (data.programName != null) {
                message.programName = data.programName;
            }
            if (data.airlineDesignator != null) {
                message.airlineDesignator = data.airlineDesignator;
            }
            if (data.number != null) {
                message.number = data.number;
            }
            if (data.tier != null) {
                message.tier = data.tier;
            }
            return message;
        }
        toObject() {
            const data: {
                programName?: string;
                airlineDesignator?: string;
                number?: string;
                tier?: string;
            } = {};
            if (this.programName != null) {
                data.programName = this.programName;
            }
            if (this.airlineDesignator != null) {
                data.airlineDesignator = this.airlineDesignator;
            }
            if (this.number != null) {
                data.number = this.number;
            }
            if (this.tier != null) {
                data.tier = this.tier;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.programName.length)
                writer.writeString(1, this.programName);
            if (this.airlineDesignator.length)
                writer.writeString(2, this.airlineDesignator);
            if (this.number.length)
                writer.writeString(3, this.number);
            if (this.tier.length)
                writer.writeString(4, this.tier);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FrequentFlyerInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FrequentFlyerInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.programName = reader.readString();
                        break;
                    case 2:
                        message.airlineDesignator = reader.readString();
                        break;
                    case 3:
                        message.number = reader.readString();
                        break;
                    case 4:
                        message.tier = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): FrequentFlyerInfo {
            return FrequentFlyerInfo.deserialize(bytes);
        }
    }
    export class IdentityDetails extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            identityDocument?: IdentityDocument;
            issuingCountry?: string;
            nationality?: string;
            documentNumber?: string;
            dateOfBirth?: dependency_2.io.Date;
            gender?: dependency_3.io.Gender;
            issuedDate?: dependency_2.io.Date;
            expiryDate?: dependency_2.io.Date;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("identityDocument" in data && data.identityDocument != undefined) {
                    this.identityDocument = data.identityDocument;
                }
                if ("issuingCountry" in data && data.issuingCountry != undefined) {
                    this.issuingCountry = data.issuingCountry;
                }
                if ("nationality" in data && data.nationality != undefined) {
                    this.nationality = data.nationality;
                }
                if ("documentNumber" in data && data.documentNumber != undefined) {
                    this.documentNumber = data.documentNumber;
                }
                if ("dateOfBirth" in data && data.dateOfBirth != undefined) {
                    this.dateOfBirth = data.dateOfBirth;
                }
                if ("gender" in data && data.gender != undefined) {
                    this.gender = data.gender;
                }
                if ("issuedDate" in data && data.issuedDate != undefined) {
                    this.issuedDate = data.issuedDate;
                }
                if ("expiryDate" in data && data.expiryDate != undefined) {
                    this.expiryDate = data.expiryDate;
                }
            }
        }
        get identityDocument() {
            return pb_1.Message.getFieldWithDefault(this, 1, IdentityDocument.PASSPORT) as IdentityDocument;
        }
        set identityDocument(value: IdentityDocument) {
            pb_1.Message.setField(this, 1, value);
        }
        get issuingCountry() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set issuingCountry(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get nationality() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set nationality(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get documentNumber() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set documentNumber(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get dateOfBirth() {
            return pb_1.Message.getWrapperField(this, dependency_2.io.Date, 5) as dependency_2.io.Date;
        }
        set dateOfBirth(value: dependency_2.io.Date) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get hasDateOfBirth() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get gender() {
            return pb_1.Message.getFieldWithDefault(this, 6, dependency_3.io.Gender.NOT_KNOWN) as dependency_3.io.Gender;
        }
        set gender(value: dependency_3.io.Gender) {
            pb_1.Message.setField(this, 6, value);
        }
        get issuedDate() {
            return pb_1.Message.getWrapperField(this, dependency_2.io.Date, 7) as dependency_2.io.Date;
        }
        set issuedDate(value: dependency_2.io.Date) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        get hasIssuedDate() {
            return pb_1.Message.getField(this, 7) != null;
        }
        get expiryDate() {
            return pb_1.Message.getWrapperField(this, dependency_2.io.Date, 8) as dependency_2.io.Date;
        }
        set expiryDate(value: dependency_2.io.Date) {
            pb_1.Message.setWrapperField(this, 8, value);
        }
        get hasExpiryDate() {
            return pb_1.Message.getField(this, 8) != null;
        }
        static fromObject(data: {
            identityDocument?: IdentityDocument;
            issuingCountry?: string;
            nationality?: string;
            documentNumber?: string;
            dateOfBirth?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
            gender?: dependency_3.io.Gender;
            issuedDate?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
            expiryDate?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
        }): IdentityDetails {
            const message = new IdentityDetails({});
            if (data.identityDocument != null) {
                message.identityDocument = data.identityDocument;
            }
            if (data.issuingCountry != null) {
                message.issuingCountry = data.issuingCountry;
            }
            if (data.nationality != null) {
                message.nationality = data.nationality;
            }
            if (data.documentNumber != null) {
                message.documentNumber = data.documentNumber;
            }
            if (data.dateOfBirth != null) {
                message.dateOfBirth = dependency_2.io.Date.fromObject(data.dateOfBirth);
            }
            if (data.gender != null) {
                message.gender = data.gender;
            }
            if (data.issuedDate != null) {
                message.issuedDate = dependency_2.io.Date.fromObject(data.issuedDate);
            }
            if (data.expiryDate != null) {
                message.expiryDate = dependency_2.io.Date.fromObject(data.expiryDate);
            }
            return message;
        }
        toObject() {
            const data: {
                identityDocument?: IdentityDocument;
                issuingCountry?: string;
                nationality?: string;
                documentNumber?: string;
                dateOfBirth?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
                gender?: dependency_3.io.Gender;
                issuedDate?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
                expiryDate?: ReturnType<typeof dependency_2.io.Date.prototype.toObject>;
            } = {};
            if (this.identityDocument != null) {
                data.identityDocument = this.identityDocument;
            }
            if (this.issuingCountry != null) {
                data.issuingCountry = this.issuingCountry;
            }
            if (this.nationality != null) {
                data.nationality = this.nationality;
            }
            if (this.documentNumber != null) {
                data.documentNumber = this.documentNumber;
            }
            if (this.dateOfBirth != null) {
                data.dateOfBirth = this.dateOfBirth.toObject();
            }
            if (this.gender != null) {
                data.gender = this.gender;
            }
            if (this.issuedDate != null) {
                data.issuedDate = this.issuedDate.toObject();
            }
            if (this.expiryDate != null) {
                data.expiryDate = this.expiryDate.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.identityDocument != IdentityDocument.PASSPORT)
                writer.writeEnum(1, this.identityDocument);
            if (this.issuingCountry.length)
                writer.writeString(2, this.issuingCountry);
            if (this.nationality.length)
                writer.writeString(3, this.nationality);
            if (this.documentNumber.length)
                writer.writeString(4, this.documentNumber);
            if (this.hasDateOfBirth)
                writer.writeMessage(5, this.dateOfBirth, () => this.dateOfBirth.serialize(writer));
            if (this.gender != dependency_3.io.Gender.NOT_KNOWN)
                writer.writeEnum(6, this.gender);
            if (this.hasIssuedDate)
                writer.writeMessage(7, this.issuedDate, () => this.issuedDate.serialize(writer));
            if (this.hasExpiryDate)
                writer.writeMessage(8, this.expiryDate, () => this.expiryDate.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IdentityDetails {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IdentityDetails();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.identityDocument = reader.readEnum();
                        break;
                    case 2:
                        message.issuingCountry = reader.readString();
                        break;
                    case 3:
                        message.nationality = reader.readString();
                        break;
                    case 4:
                        message.documentNumber = reader.readString();
                        break;
                    case 5:
                        reader.readMessage(message.dateOfBirth, () => message.dateOfBirth = dependency_2.io.Date.deserialize(reader));
                        break;
                    case 6:
                        message.gender = reader.readEnum();
                        break;
                    case 7:
                        reader.readMessage(message.issuedDate, () => message.issuedDate = dependency_2.io.Date.deserialize(reader));
                        break;
                    case 8:
                        reader.readMessage(message.expiryDate, () => message.expiryDate = dependency_2.io.Date.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IdentityDetails {
            return IdentityDetails.deserialize(bytes);
        }
    }
    export class Infant extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            infantDetails?: dependency_3.io.Person;
            identityDetails?: IdentityDetails;
            barcodePayload?: string;
            conditionalItems?: dependency_1.flights.ConditionalItems;
            barcodeAdditionalData?: string;
            securityImage?: string;
            privilegeImage?: string;
            footerImage?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("infantDetails" in data && data.infantDetails != undefined) {
                    this.infantDetails = data.infantDetails;
                }
                if ("identityDetails" in data && data.identityDetails != undefined) {
                    this.identityDetails = data.identityDetails;
                }
                if ("barcodePayload" in data && data.barcodePayload != undefined) {
                    this.barcodePayload = data.barcodePayload;
                }
                if ("conditionalItems" in data && data.conditionalItems != undefined) {
                    this.conditionalItems = data.conditionalItems;
                }
                if ("barcodeAdditionalData" in data && data.barcodeAdditionalData != undefined) {
                    this.barcodeAdditionalData = data.barcodeAdditionalData;
                }
                if ("securityImage" in data && data.securityImage != undefined) {
                    this.securityImage = data.securityImage;
                }
                if ("privilegeImage" in data && data.privilegeImage != undefined) {
                    this.privilegeImage = data.privilegeImage;
                }
                if ("footerImage" in data && data.footerImage != undefined) {
                    this.footerImage = data.footerImage;
                }
            }
        }
        get infantDetails() {
            return pb_1.Message.getWrapperField(this, dependency_3.io.Person, 1) as dependency_3.io.Person;
        }
        set infantDetails(value: dependency_3.io.Person) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get hasInfantDetails() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get identityDetails() {
            return pb_1.Message.getWrapperField(this, IdentityDetails, 2) as IdentityDetails;
        }
        set identityDetails(value: IdentityDetails) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get hasIdentityDetails() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get barcodePayload() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set barcodePayload(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get conditionalItems() {
            return pb_1.Message.getWrapperField(this, dependency_1.flights.ConditionalItems, 4) as dependency_1.flights.ConditionalItems;
        }
        set conditionalItems(value: dependency_1.flights.ConditionalItems) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get hasConditionalItems() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get barcodeAdditionalData() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set barcodeAdditionalData(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get securityImage() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set securityImage(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get privilegeImage() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set privilegeImage(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get footerImage() {
            return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
        }
        set footerImage(value: string) {
            pb_1.Message.setField(this, 8, value);
        }
        static fromObject(data: {
            infantDetails?: ReturnType<typeof dependency_3.io.Person.prototype.toObject>;
            identityDetails?: ReturnType<typeof IdentityDetails.prototype.toObject>;
            barcodePayload?: string;
            conditionalItems?: ReturnType<typeof dependency_1.flights.ConditionalItems.prototype.toObject>;
            barcodeAdditionalData?: string;
            securityImage?: string;
            privilegeImage?: string;
            footerImage?: string;
        }): Infant {
            const message = new Infant({});
            if (data.infantDetails != null) {
                message.infantDetails = dependency_3.io.Person.fromObject(data.infantDetails);
            }
            if (data.identityDetails != null) {
                message.identityDetails = IdentityDetails.fromObject(data.identityDetails);
            }
            if (data.barcodePayload != null) {
                message.barcodePayload = data.barcodePayload;
            }
            if (data.conditionalItems != null) {
                message.conditionalItems = dependency_1.flights.ConditionalItems.fromObject(data.conditionalItems);
            }
            if (data.barcodeAdditionalData != null) {
                message.barcodeAdditionalData = data.barcodeAdditionalData;
            }
            if (data.securityImage != null) {
                message.securityImage = data.securityImage;
            }
            if (data.privilegeImage != null) {
                message.privilegeImage = data.privilegeImage;
            }
            if (data.footerImage != null) {
                message.footerImage = data.footerImage;
            }
            return message;
        }
        toObject() {
            const data: {
                infantDetails?: ReturnType<typeof dependency_3.io.Person.prototype.toObject>;
                identityDetails?: ReturnType<typeof IdentityDetails.prototype.toObject>;
                barcodePayload?: string;
                conditionalItems?: ReturnType<typeof dependency_1.flights.ConditionalItems.prototype.toObject>;
                barcodeAdditionalData?: string;
                securityImage?: string;
                privilegeImage?: string;
                footerImage?: string;
            } = {};
            if (this.infantDetails != null) {
                data.infantDetails = this.infantDetails.toObject();
            }
            if (this.identityDetails != null) {
                data.identityDetails = this.identityDetails.toObject();
            }
            if (this.barcodePayload != null) {
                data.barcodePayload = this.barcodePayload;
            }
            if (this.conditionalItems != null) {
                data.conditionalItems = this.conditionalItems.toObject();
            }
            if (this.barcodeAdditionalData != null) {
                data.barcodeAdditionalData = this.barcodeAdditionalData;
            }
            if (this.securityImage != null) {
                data.securityImage = this.securityImage;
            }
            if (this.privilegeImage != null) {
                data.privilegeImage = this.privilegeImage;
            }
            if (this.footerImage != null) {
                data.footerImage = this.footerImage;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hasInfantDetails)
                writer.writeMessage(1, this.infantDetails, () => this.infantDetails.serialize(writer));
            if (this.hasIdentityDetails)
                writer.writeMessage(2, this.identityDetails, () => this.identityDetails.serialize(writer));
            if (this.barcodePayload.length)
                writer.writeString(3, this.barcodePayload);
            if (this.hasConditionalItems)
                writer.writeMessage(4, this.conditionalItems, () => this.conditionalItems.serialize(writer));
            if (this.barcodeAdditionalData.length)
                writer.writeString(5, this.barcodeAdditionalData);
            if (this.securityImage.length)
                writer.writeString(6, this.securityImage);
            if (this.privilegeImage.length)
                writer.writeString(7, this.privilegeImage);
            if (this.footerImage.length)
                writer.writeString(8, this.footerImage);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Infant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Infant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.infantDetails, () => message.infantDetails = dependency_3.io.Person.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.identityDetails, () => message.identityDetails = IdentityDetails.deserialize(reader));
                        break;
                    case 3:
                        message.barcodePayload = reader.readString();
                        break;
                    case 4:
                        reader.readMessage(message.conditionalItems, () => message.conditionalItems = dependency_1.flights.ConditionalItems.deserialize(reader));
                        break;
                    case 5:
                        message.barcodeAdditionalData = reader.readString();
                        break;
                    case 6:
                        message.securityImage = reader.readString();
                        break;
                    case 7:
                        message.privilegeImage = reader.readString();
                        break;
                    case 8:
                        message.footerImage = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Infant {
            return Infant.deserialize(bytes);
        }
    }
}
