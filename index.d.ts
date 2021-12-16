/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Diagnostic, { events } from './lib/Diagnostic'
import Transport from './lib/Transport'
import {
  BaseConnection,
  HttpConnection,
  UndiciConnection
} from './lib/connection'
import {
  WeightedConnectionPool,
  ClusterConnectionPool,
  CloudConnectionPool,
  BaseConnectionPool
} from './lib/pool'
import Serializer from './lib/Serializer'
import * as errors from './lib/errors'

export type {
  Connection,
  ConnectionOptions,
  ConnectionRequestParams,
  ConnectionRequestOptions,
  ConnectionRequestOptionsAsStream,
  ConnectionRequestResponse,
  ConnectionRequestResponseAsStream
} from './lib/connection'

export type {
  ConnectionPoolOptions,
  GetConnectionOptions
} from './lib/pool'

export type {
  TransportOptions,
  TransportRequestParams,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  SniffOptions
} from './lib/Transport'

export type {
  RequestBody,
  RequestNDBody,
  DiagnosticResult,
  TransportResult,
  HttpAgentOptions,
  UndiciAgentOptions,
  ApiKeyAuth,
  BearerAuth
} from './lib/types'

export {
  Diagnostic,
  Transport,
  WeightedConnectionPool,
  ClusterConnectionPool,
  BaseConnectionPool,
  CloudConnectionPool,
  BaseConnection,
  HttpConnection,
  UndiciConnection,
  Serializer,
  errors,
  events
}
