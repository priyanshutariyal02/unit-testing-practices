const { TextDecoder, TextEncoder } = require('node:util')
const { ReadableStream, TransformStream, WritableStream } = require('node:stream/web')
const { Blob, File } = require('node:buffer')
const { MessageChannel, MessagePort, BroadcastChannel } = require('node:worker_threads')

Object.assign(globalThis, {
  TextDecoder,
  TextEncoder,
  ReadableStream,
  TransformStream,
  WritableStream,
  Blob,
  File,
  MessageChannel,
  MessagePort,
  BroadcastChannel,
})

const { fetch, Headers, Request, Response, FormData } = require('undici')

Object.assign(globalThis, {
  fetch,
  Headers,
  Request,
  Response,
  FormData,
})
