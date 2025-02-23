/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.29.0
 * source: io/raw/a_rpc.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../google/protobuf/empty";
import * as dependency_2 from "./../../google/api/annotations";
import * as dependency_3 from "./../common/common_objects";
import * as dependency_4 from "./project";
import * as dependency_5 from "./pass";
import * as dependency_6 from "./../../protoc-gen-openapiv2/options/annotations";
import * as grpc_1 from "@grpc/grpc-js";
export namespace raw {
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedRawService {
        static definition = {
            createPassProject: {
                path: "/raw.Raw/createPassProject",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_4.raw.PassProject) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_4.raw.PassProject.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes))
            },
            updatePassProject: {
                path: "/raw.Raw/updatePassProject",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_4.raw.PassProject) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_4.raw.PassProject.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_4.raw.PassProject) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_4.raw.PassProject.deserialize(new Uint8Array(bytes))
            },
            getPassProject: {
                path: "/raw.Raw/getPassProject",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_4.raw.PassProject) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_4.raw.PassProject.deserialize(new Uint8Array(bytes))
            },
            copyPassProject: {
                path: "/raw.Raw/copyPassProject",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_4.raw.PassProjectCopyRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_4.raw.PassProjectCopyRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes))
            },
            deletePassProject: {
                path: "/raw.Raw/deletePassProject",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            },
            createPass: {
                path: "/raw.Raw/createPass",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes))
            },
            updatePass: {
                path: "/raw.Raw/updatePass",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes))
            },
            streamPassUpdates: {
                path: "/raw.Raw/streamPassUpdates",
                requestStream: true,
                responseStream: true,
                requestSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes))
            },
            getPassById: {
                path: "/raw.Raw/getPassById",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_3.io.Id) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_3.io.Id.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes))
            },
            getPassByExternalId: {
                path: "/raw.Raw/getPassByExternalId",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_5.raw.PassRecordByExternalIdRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.PassRecordByExternalIdRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes))
            },
            deletePass: {
                path: "/raw.Raw/deletePass",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_1.google.protobuf.Empty) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_1.google.protobuf.Empty.deserialize(new Uint8Array(bytes))
            },
            listPassesByPassProject: {
                path: "/raw.Raw/listPassesByPassProject",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_5.raw.ListPassesByPassProjectRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.ListPassesByPassProjectRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes))
            },
            listPassesByPassTemplate: {
                path: "/raw.Raw/listPassesByPassTemplate",
                requestStream: false,
                responseStream: true,
                requestSerialize: (message: dependency_5.raw.ListPassesByPassTemplateRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => dependency_5.raw.ListPassesByPassTemplateRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: dependency_5.raw.Pass) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => dependency_5.raw.Pass.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract createPassProject(call: grpc_1.ServerUnaryCall<dependency_4.raw.PassProject, dependency_3.io.Id>, callback: grpc_1.sendUnaryData<dependency_3.io.Id>): void;
        abstract updatePassProject(call: grpc_1.ServerUnaryCall<dependency_4.raw.PassProject, dependency_4.raw.PassProject>, callback: grpc_1.sendUnaryData<dependency_4.raw.PassProject>): void;
        abstract getPassProject(call: grpc_1.ServerUnaryCall<dependency_3.io.Id, dependency_4.raw.PassProject>, callback: grpc_1.sendUnaryData<dependency_4.raw.PassProject>): void;
        abstract copyPassProject(call: grpc_1.ServerUnaryCall<dependency_4.raw.PassProjectCopyRequest, dependency_3.io.Id>, callback: grpc_1.sendUnaryData<dependency_3.io.Id>): void;
        abstract deletePassProject(call: grpc_1.ServerUnaryCall<dependency_3.io.Id, dependency_1.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_1.google.protobuf.Empty>): void;
        abstract createPass(call: grpc_1.ServerUnaryCall<dependency_5.raw.Pass, dependency_3.io.Id>, callback: grpc_1.sendUnaryData<dependency_3.io.Id>): void;
        abstract updatePass(call: grpc_1.ServerUnaryCall<dependency_5.raw.Pass, dependency_3.io.Id>, callback: grpc_1.sendUnaryData<dependency_3.io.Id>): void;
        abstract streamPassUpdates(call: grpc_1.ServerDuplexStream<dependency_5.raw.Pass, dependency_3.io.Id>): void;
        abstract getPassById(call: grpc_1.ServerUnaryCall<dependency_3.io.Id, dependency_5.raw.Pass>, callback: grpc_1.sendUnaryData<dependency_5.raw.Pass>): void;
        abstract getPassByExternalId(call: grpc_1.ServerUnaryCall<dependency_5.raw.PassRecordByExternalIdRequest, dependency_5.raw.Pass>, callback: grpc_1.sendUnaryData<dependency_5.raw.Pass>): void;
        abstract deletePass(call: grpc_1.ServerUnaryCall<dependency_5.raw.Pass, dependency_1.google.protobuf.Empty>, callback: grpc_1.sendUnaryData<dependency_1.google.protobuf.Empty>): void;
        abstract listPassesByPassProject(call: grpc_1.ServerWritableStream<dependency_5.raw.ListPassesByPassProjectRequest, dependency_5.raw.Pass>): void;
        abstract listPassesByPassTemplate(call: grpc_1.ServerWritableStream<dependency_5.raw.ListPassesByPassTemplateRequest, dependency_5.raw.Pass>): void;
    }
    export class RawClient extends grpc_1.makeGenericClientConstructor(UnimplementedRawService.definition, "Raw", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        createPassProject: GrpcPromiseServiceInterface<dependency_4.raw.PassProject, dependency_3.io.Id> = (message: dependency_4.raw.PassProject, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_3.io.Id> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.createPassProject(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_3.io.Id) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        updatePassProject: GrpcPromiseServiceInterface<dependency_4.raw.PassProject, dependency_4.raw.PassProject> = (message: dependency_4.raw.PassProject, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_4.raw.PassProject> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.updatePassProject(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_4.raw.PassProject) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        getPassProject: GrpcPromiseServiceInterface<dependency_3.io.Id, dependency_4.raw.PassProject> = (message: dependency_3.io.Id, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_4.raw.PassProject> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.getPassProject(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_4.raw.PassProject) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        copyPassProject: GrpcPromiseServiceInterface<dependency_4.raw.PassProjectCopyRequest, dependency_3.io.Id> = (message: dependency_4.raw.PassProjectCopyRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_3.io.Id> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.copyPassProject(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_3.io.Id) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        deletePassProject: GrpcPromiseServiceInterface<dependency_3.io.Id, dependency_1.google.protobuf.Empty> = (message: dependency_3.io.Id, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_1.google.protobuf.Empty> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.deletePassProject(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_1.google.protobuf.Empty) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        createPass: GrpcPromiseServiceInterface<dependency_5.raw.Pass, dependency_3.io.Id> = (message: dependency_5.raw.Pass, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_3.io.Id> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.createPass(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_3.io.Id) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        updatePass: GrpcPromiseServiceInterface<dependency_5.raw.Pass, dependency_3.io.Id> = (message: dependency_5.raw.Pass, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_3.io.Id> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.updatePass(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_3.io.Id) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        streamPassUpdates: GrpcChunkServiceInterface<dependency_5.raw.Pass, dependency_3.io.Id> = (metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<dependency_5.raw.Pass, dependency_3.io.Id> => {
            return super.streamPassUpdates(metadata, options);
        };
        getPassById: GrpcPromiseServiceInterface<dependency_3.io.Id, dependency_5.raw.Pass> = (message: dependency_3.io.Id, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_5.raw.Pass> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.getPassById(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_5.raw.Pass) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        getPassByExternalId: GrpcPromiseServiceInterface<dependency_5.raw.PassRecordByExternalIdRequest, dependency_5.raw.Pass> = (message: dependency_5.raw.PassRecordByExternalIdRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_5.raw.Pass> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.getPassByExternalId(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_5.raw.Pass) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        deletePass: GrpcPromiseServiceInterface<dependency_5.raw.Pass, dependency_1.google.protobuf.Empty> = (message: dependency_5.raw.Pass, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<dependency_1.google.protobuf.Empty> => { if (!metadata) {
            metadata = new grpc_1.Metadata;
        } if (!options) {
            options = {};
        } return new Promise((resolve, reject) => super.deletePass(message, metadata, options, (error: grpc_1.ServiceError, response: dependency_1.google.protobuf.Empty) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        })); };
        listPassesByPassProject: GrpcStreamServiceInterface<dependency_5.raw.ListPassesByPassProjectRequest, dependency_5.raw.Pass> = (message: dependency_5.raw.ListPassesByPassProjectRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<dependency_5.raw.Pass> => {
            return super.listPassesByPassProject(message, metadata, options);
        };
        listPassesByPassTemplate: GrpcStreamServiceInterface<dependency_5.raw.ListPassesByPassTemplateRequest, dependency_5.raw.Pass> = (message: dependency_5.raw.ListPassesByPassTemplateRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<dependency_5.raw.Pass> => {
            return super.listPassesByPassTemplate(message, metadata, options);
        };
    }
}
