/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/common/attributes.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace io {
    export enum DeviceAttributes {
        NoAttributes = 0,
        Ios = 1,
        Android = 2,
        SupportWallet = 4,
        WalletScanner = 8,
        WalletDaemon = 16,
        WalletPasses = 32,
        Windows = 64,
        OSX = 128,
        Linux = 256,
        Mobile = 512,
        Desktop = 1024,
        Tablet = 2048,
        UnsupportedIos = 4096
    }
    export enum Channel {
        UnknownChannel = 0,
        Web = 1,
        API = 2,
        App = 3
    }
    export enum Authentication {
        Unauthenticated = 0,
        WebToken = 1,
        BearerToken = 2,
        Certificate = 3
    }
    export enum UserType {
        UnknownUserType = 0,
        User = 1,
        TeamMember = 2
    }
}
