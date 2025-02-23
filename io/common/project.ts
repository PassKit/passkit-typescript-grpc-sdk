/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/common/project.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../google/protobuf/timestamp";
import * as dependency_2 from "./protocols";
import * as dependency_3 from "./template";
import * as pb_1 from "google-protobuf";
export namespace io {
    export enum ProjectStatus {
        NO_PROJECT_STATUS = 0,
        PROJECT_ACTIVE_FOR_OBJECT_CREATION = 1,
        PROJECT_DISABLED_FOR_OBJECT_CREATION = 2,
        PROJECT_DRAFT = 4,
        PROJECT_PUBLISHED = 8,
        PROJECT_PRIVATE = 16,
        PROJECT_OVER_QUOTA = 32,
        PROJECT_DELETED = 64,
        PROJECT_EMAIL_WARNING = 128,
        PROJECT_EMAIL_SUSPENDED = 256
    }
    export class Project extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            protocol?: dependency_2.io.PassProtocol;
            classId?: string;
            name?: string;
            shortCode?: string;
            created?: dependency_1.google.protobuf.Timestamp;
            secret?: string;
            key?: string;
            encryptedClassId?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("protocol" in data && data.protocol != undefined) {
                    this.protocol = data.protocol;
                }
                if ("classId" in data && data.classId != undefined) {
                    this.classId = data.classId;
                }
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("shortCode" in data && data.shortCode != undefined) {
                    this.shortCode = data.shortCode;
                }
                if ("created" in data && data.created != undefined) {
                    this.created = data.created;
                }
                if ("secret" in data && data.secret != undefined) {
                    this.secret = data.secret;
                }
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("encryptedClassId" in data && data.encryptedClassId != undefined) {
                    this.encryptedClassId = data.encryptedClassId;
                }
            }
        }
        get protocol() {
            return pb_1.Message.getFieldWithDefault(this, 1, dependency_2.io.PassProtocol.PASS_PROTOCOL_DO_NOT_USE) as dependency_2.io.PassProtocol;
        }
        set protocol(value: dependency_2.io.PassProtocol) {
            pb_1.Message.setField(this, 1, value);
        }
        get classId() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set classId(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get shortCode() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set shortCode(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get created() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Timestamp, 5) as dependency_1.google.protobuf.Timestamp;
        }
        set created(value: dependency_1.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get hasCreated() {
            return pb_1.Message.getField(this, 5) != null;
        }
        get secret() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set secret(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
        }
        set key(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        get encryptedClassId() {
            return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
        }
        set encryptedClassId(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        static fromObject(data: {
            protocol?: dependency_2.io.PassProtocol;
            classId?: string;
            name?: string;
            shortCode?: string;
            created?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
            secret?: string;
            key?: string;
            encryptedClassId?: string;
        }): Project {
            const message = new Project({});
            if (data.protocol != null) {
                message.protocol = data.protocol;
            }
            if (data.classId != null) {
                message.classId = data.classId;
            }
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.shortCode != null) {
                message.shortCode = data.shortCode;
            }
            if (data.created != null) {
                message.created = dependency_1.google.protobuf.Timestamp.fromObject(data.created);
            }
            if (data.secret != null) {
                message.secret = data.secret;
            }
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.encryptedClassId != null) {
                message.encryptedClassId = data.encryptedClassId;
            }
            return message;
        }
        toObject() {
            const data: {
                protocol?: dependency_2.io.PassProtocol;
                classId?: string;
                name?: string;
                shortCode?: string;
                created?: ReturnType<typeof dependency_1.google.protobuf.Timestamp.prototype.toObject>;
                secret?: string;
                key?: string;
                encryptedClassId?: string;
            } = {};
            if (this.protocol != null) {
                data.protocol = this.protocol;
            }
            if (this.classId != null) {
                data.classId = this.classId;
            }
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.shortCode != null) {
                data.shortCode = this.shortCode;
            }
            if (this.created != null) {
                data.created = this.created.toObject();
            }
            if (this.secret != null) {
                data.secret = this.secret;
            }
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.encryptedClassId != null) {
                data.encryptedClassId = this.encryptedClassId;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.protocol != dependency_2.io.PassProtocol.PASS_PROTOCOL_DO_NOT_USE)
                writer.writeEnum(1, this.protocol);
            if (this.classId.length)
                writer.writeString(2, this.classId);
            if (this.name.length)
                writer.writeString(3, this.name);
            if (this.shortCode.length)
                writer.writeString(4, this.shortCode);
            if (this.hasCreated)
                writer.writeMessage(5, this.created, () => this.created.serialize(writer));
            if (this.secret.length)
                writer.writeString(6, this.secret);
            if (this.key.length)
                writer.writeString(7, this.key);
            if (this.encryptedClassId.length)
                writer.writeString(9, this.encryptedClassId);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Project {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Project();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.protocol = reader.readEnum();
                        break;
                    case 2:
                        message.classId = reader.readString();
                        break;
                    case 3:
                        message.name = reader.readString();
                        break;
                    case 4:
                        message.shortCode = reader.readString();
                        break;
                    case 5:
                        reader.readMessage(message.created, () => message.created = dependency_1.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 6:
                        message.secret = reader.readString();
                        break;
                    case 7:
                        message.key = reader.readString();
                        break;
                    case 9:
                        message.encryptedClassId = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Project {
            return Project.deserialize(bytes);
        }
    }
    export class ProjectByShortCodeResult extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            project?: Project;
            template?: dependency_3.io.PassTemplate;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("project" in data && data.project != undefined) {
                    this.project = data.project;
                }
                if ("template" in data && data.template != undefined) {
                    this.template = data.template;
                }
            }
        }
        get project() {
            return pb_1.Message.getWrapperField(this, Project, 1) as Project;
        }
        set project(value: Project) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get hasProject() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get template() {
            return pb_1.Message.getWrapperField(this, dependency_3.io.PassTemplate, 2) as dependency_3.io.PassTemplate;
        }
        set template(value: dependency_3.io.PassTemplate) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get hasTemplate() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            project?: ReturnType<typeof Project.prototype.toObject>;
            template?: ReturnType<typeof dependency_3.io.PassTemplate.prototype.toObject>;
        }): ProjectByShortCodeResult {
            const message = new ProjectByShortCodeResult({});
            if (data.project != null) {
                message.project = Project.fromObject(data.project);
            }
            if (data.template != null) {
                message.template = dependency_3.io.PassTemplate.fromObject(data.template);
            }
            return message;
        }
        toObject() {
            const data: {
                project?: ReturnType<typeof Project.prototype.toObject>;
                template?: ReturnType<typeof dependency_3.io.PassTemplate.prototype.toObject>;
            } = {};
            if (this.project != null) {
                data.project = this.project.toObject();
            }
            if (this.template != null) {
                data.template = this.template.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hasProject)
                writer.writeMessage(1, this.project, () => this.project.serialize(writer));
            if (this.hasTemplate)
                writer.writeMessage(2, this.template, () => this.template.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProjectByShortCodeResult {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProjectByShortCodeResult();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.project, () => message.project = Project.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.template, () => message.template = dependency_3.io.PassTemplate.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProjectByShortCodeResult {
            return ProjectByShortCodeResult.deserialize(bytes);
        }
    }
    export class ProjectStatusFilter extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            status?: ProjectStatus;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("status" in data && data.status != undefined) {
                    this.status = data.status;
                }
            }
        }
        get status() {
            return pb_1.Message.getFieldWithDefault(this, 1, ProjectStatus.NO_PROJECT_STATUS) as ProjectStatus;
        }
        set status(value: ProjectStatus) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            status?: ProjectStatus;
        }): ProjectStatusFilter {
            const message = new ProjectStatusFilter({});
            if (data.status != null) {
                message.status = data.status;
            }
            return message;
        }
        toObject() {
            const data: {
                status?: ProjectStatus;
            } = {};
            if (this.status != null) {
                data.status = this.status;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.status != ProjectStatus.NO_PROJECT_STATUS)
                writer.writeEnum(1, this.status);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProjectStatusFilter {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProjectStatusFilter();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.status = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProjectStatusFilter {
            return ProjectStatusFilter.deserialize(bytes);
        }
    }
}
