/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/common/localization.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace io {
    export enum LanguageCode {
        EN = 0,
        AR = 4,
        ZH_HANS = 8,
        ZH_HANT = 12,
        ZH_HK = 16,
        CA = 20,
        HR = 24,
        CS = 28,
        DA = 32,
        DE = 36,
        EN_AU = 40,
        EN_GB = 44,
        EN_CA = 48,
        EN_US = 52,
        EN_IN = 56,
        ES = 60,
        ES_419 = 64,
        FI = 68,
        FR = 72,
        FR_CA = 76,
        EL = 80,
        HE = 84,
        HI = 88,
        HU = 92,
        ID = 96,
        IT = 100,
        JA = 104,
        KO = 108,
        MS = 112,
        MT = 116,
        NL = 120,
        NB = 124,
        PL = 128,
        PT = 132,
        PT_BR = 136,
        RO = 140,
        RU = 144,
        SK = 148,
        SV = 152,
        TH = 156,
        TR = 160,
        UK = 164,
        VI = 168
    }
    export class LocalizedString extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            translations?: Map<string, string>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("translations" in data && data.translations != undefined) {
                    this.translations = data.translations;
                }
            }
            if (!this.translations)
                this.translations = new Map();
        }
        get translations() {
            return pb_1.Message.getField(this, 1) as any as Map<string, string>;
        }
        set translations(value: Map<string, string>) {
            pb_1.Message.setField(this, 1, value as any);
        }
        static fromObject(data: {
            translations?: {
                [key: string]: string;
            };
        }): LocalizedString {
            const message = new LocalizedString({});
            if (typeof data.translations == "object") {
                message.translations = new Map(Object.entries(data.translations));
            }
            return message;
        }
        toObject() {
            const data: {
                translations?: {
                    [key: string]: string;
                };
            } = {};
            if (this.translations != null) {
                data.translations = (Object.fromEntries)(this.translations);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            for (const [key, value] of this.translations) {
                writer.writeMessage(1, this.translations, () => {
                    writer.writeString(1, key);
                    writer.writeString(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LocalizedString {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LocalizedString();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.translations as any, reader, reader.readString, reader.readString));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LocalizedString {
            return LocalizedString.deserialize(bytes);
        }
    }
}
