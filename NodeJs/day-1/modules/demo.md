Node.js v20.3.1 documentation

► Table of contents ► Index ► Other versions ► Options
Table of contents
File system
Promise example
Callback example
Synchronous example
Promises API
Class: FileHandle
Event: 'close'
filehandle.appendFile(data[, options])
filehandle.chmod(mode)
filehandle.chown(uid, gid)
filehandle.close()
filehandle.createReadStream([options])
filehandle.createWriteStream([options])
filehandle.datasync()
filehandle.fd
filehandle.read(buffer, offset, length, position)
filehandle.read([options])
filehandle.read(buffer[, options])
filehandle.readableWebStream(options)
filehandle.readFile(options)
filehandle.readLines([options])
filehandle.readv(buffers[, position])
filehandle.stat([options])
filehandle.sync()
filehandle.truncate(len)
filehandle.utimes(atime, mtime)
filehandle.write(buffer, offset[, length[, position]])
filehandle.write(buffer[, options])
filehandle.write(string[, position[, encoding]])
filehandle.writeFile(data, options)
filehandle.writev(buffers[, position])
fsPromises.access(path[, mode])
fsPromises.appendFile(path, data[, options])
fsPromises.chmod(path, mode)
fsPromises.chown(path, uid, gid)
fsPromises.copyFile(src, dest[, mode])
fsPromises.cp(src, dest[, options])
fsPromises.lchmod(path, mode)
fsPromises.lchown(path, uid, gid)
fsPromises.lutimes(path, atime, mtime)
fsPromises.link(existingPath, newPath)
fsPromises.lstat(path[, options])
fsPromises.mkdir(path[, options])
fsPromises.mkdtemp(prefix[, options])
fsPromises.open(path, flags[, mode])
fsPromises.opendir(path[, options])
fsPromises.readdir(path[, options])
fsPromises.readFile(path[, options])
fsPromises.readlink(path[, options])
fsPromises.realpath(path[, options])
fsPromises.rename(oldPath, newPath)
fsPromises.rmdir(path[, options])
fsPromises.rm(path[, options])
fsPromises.stat(path[, options])
fsPromises.statfs(path[, options])
fsPromises.symlink(target, path[, type])
fsPromises.truncate(path[, len])
fsPromises.unlink(path)
fsPromises.utimes(path, atime, mtime)
fsPromises.watch(filename[, options])
fsPromises.writeFile(file, data[, options])
fsPromises.constants
Callback API
fs.access(path[, mode], callback)
fs.appendFile(path, data[, options], callback)
fs.chmod(path, mode, callback)
File modes
fs.chown(path, uid, gid, callback)
fs.close(fd[, callback])
fs.copyFile(src, dest[, mode], callback)
fs.cp(src, dest[, options], callback)
fs.createReadStream(path[, options])
fs.createWriteStream(path[, options])
fs.exists(path, callback)
fs.fchmod(fd, mode, callback)
fs.fchown(fd, uid, gid, callback)
fs.fdatasync(fd, callback)
fs.fstat(fd[, options], callback)
fs.fsync(fd, callback)
fs.ftruncate(fd[, len], callback)
fs.futimes(fd, atime, mtime, callback)
fs.lchmod(path, mode, callback)
fs.lchown(path, uid, gid, callback)
fs.lutimes(path, atime, mtime, callback)
fs.link(existingPath, newPath, callback)
fs.lstat(path[, options], callback)
fs.mkdir(path[, options], callback)
fs.mkdtemp(prefix[, options], callback)
fs.open(path[, flags[, mode]], callback)
fs.openAsBlob(path[, options])
fs.opendir(path[, options], callback)
fs.read(fd, buffer, offset, length, position, callback)
fs.read(fd[, options], callback)
fs.read(fd, buffer[, options], callback)
fs.readdir(path[, options], callback)
fs.readFile(path[, options], callback)
File descriptors
Performance Considerations
fs.readlink(path[, options], callback)
fs.readv(fd, buffers[, position], callback)
fs.realpath(path[, options], callback)
fs.realpath.native(path[, options], callback)
fs.rename(oldPath, newPath, callback)
fs.rmdir(path[, options], callback)
fs.rm(path[, options], callback)
fs.stat(path[, options], callback)
fs.statfs(path[, options], callback)
fs.symlink(target, path[, type], callback)
fs.truncate(path[, len], callback)
fs.unlink(path, callback)
fs.unwatchFile(filename[, listener])
fs.utimes(path, atime, mtime, callback)
fs.watch(filename[, options][, listener])
Caveats
Availability
Inodes
Filename argument
fs.watchFile(filename[, options], listener)
fs.write(fd, buffer, offset[, length[, position]], callback)
fs.write(fd, buffer[, options], callback)
fs.write(fd, string[, position[, encoding]], callback)
fs.writeFile(file, data[, options], callback)
Using fs.writeFile() with file descriptors
fs.writev(fd, buffers[, position], callback)
Synchronous API
fs.accessSync(path[, mode])
fs.appendFileSync(path, data[, options])
fs.chmodSync(path, mode)
fs.chownSync(path, uid, gid)
fs.closeSync(fd)
fs.copyFileSync(src, dest[, mode])
fs.cpSync(src, dest[, options])
fs.existsSync(path)
fs.fchmodSync(fd, mode)
fs.fchownSync(fd, uid, gid)
fs.fdatasyncSync(fd)
fs.fstatSync(fd[, options])
fs.fsyncSync(fd)
fs.ftruncateSync(fd[, len])
fs.futimesSync(fd, atime, mtime)
fs.lchmodSync(path, mode)
fs.lchownSync(path, uid, gid)
fs.lutimesSync(path, atime, mtime)
fs.linkSync(existingPath, newPath)
fs.lstatSync(path[, options])
fs.mkdirSync(path[, options])
fs.mkdtempSync(prefix[, options])
fs.opendirSync(path[, options])
fs.openSync(path[, flags[, mode]])
fs.readdirSync(path[, options])
fs.readFileSync(path[, options])
fs.readlinkSync(path[, options])
fs.readSync(fd, buffer, offset, length[, position])
fs.readSync(fd, buffer[, options])
fs.readvSync(fd, buffers[, position])
fs.realpathSync(path[, options])
fs.realpathSync.native(path[, options])
fs.renameSync(oldPath, newPath)
fs.rmdirSync(path[, options])
fs.rmSync(path[, options])
fs.statSync(path[, options])
fs.statfsSync(path[, options])
fs.symlinkSync(target, path[, type])
fs.truncateSync(path[, len])
fs.unlinkSync(path)
fs.utimesSync(path, atime, mtime)
fs.writeFileSync(file, data[, options])
fs.writeSync(fd, buffer, offset[, length[, position]])
fs.writeSync(fd, buffer[, options])
fs.writeSync(fd, string[, position[, encoding]])
fs.writevSync(fd, buffers[, position])
Common Objects
Class: fs.Dir
dir.close()
dir.close(callback)
dir.closeSync()
dir.path
dir.read()
dir.read(callback)
dir.readSync()
dir[Symbol.asyncIterator]()
Class: fs.Dirent
dirent.isBlockDevice()
dirent.isCharacterDevice()
dirent.isDirectory()
dirent.isFIFO()
dirent.isFile()
dirent.isSocket()
dirent.isSymbolicLink()
dirent.name
dirent.path
Class: fs.FSWatcher
Event: 'change'
Event: 'close'
Event: 'error'
watcher.close()
watcher.ref()
watcher.unref()
Class: fs.StatWatcher
watcher.ref()
watcher.unref()
Class: fs.ReadStream
Event: 'close'
Event: 'open'
Event: 'ready'
readStream.bytesRead
readStream.path
readStream.pending
Class: fs.Stats
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isDirectory()
stats.isFIFO()
stats.isFile()
stats.isSocket()
stats.isSymbolicLink()
stats.dev
stats.ino
stats.mode
stats.nlink
stats.uid
stats.gid
stats.rdev
stats.size
stats.blksize
stats.blocks
stats.atimeMs
stats.mtimeMs
stats.ctimeMs
stats.birthtimeMs
stats.atimeNs
stats.mtimeNs
stats.ctimeNs
stats.birthtimeNs
stats.atime
stats.mtime
stats.ctime
stats.birthtime
Stat time values
Class: fs.StatFs
statfs.bavail
statfs.bfree
statfs.blocks
statfs.bsize
statfs.ffree
statfs.files
statfs.type
Class: fs.WriteStream
Event: 'close'
Event: 'open'
Event: 'ready'
writeStream.bytesWritten
writeStream.close([callback])
writeStream.path
writeStream.pending
fs.constants
FS constants
File access constants
File copy constants
File open constants
File type constants
File mode constants
Notes
Ordering of callback and promise-based operations
File paths
String paths
File URL paths
Platform-specific considerations
Buffer paths
Per-drive working directories on Windows
File descriptors
Threadpool usage
File system flags
File system#
Stability: 2 - Stable
Source Code: lib/fs.js

The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

To use the promise-based APIs:

import * as fs from 'node:fs/promises';COPY
To use the callback and sync APIs:

import * as fs from 'node:fs';COPY
All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

Promise example#
Promise-based operations return a promise that is fulfilled when the asynchronous operation is complete.

import { unlink } from 'node:fs/promises';

try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}COPY
Callback example#
The callback form takes a completion callback function as its last argument and invokes the operation asynchronously. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation is completed successfully, then the first argument is null or undefined.

import { unlink } from 'node:fs';

unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});COPY
The callback-based versions of the node:fs module APIs are preferable over the use of the promise APIs when maximal performance (both in terms of execution time and memory allocation) is required.

Synchronous example#
The synchronous APIs block the Node.js event loop and further JavaScript execution until the operation is complete. Exceptions are thrown immediately and can be handled using try…catch, or can be allowed to bubble up.

import { unlinkSync } from 'node:fs';

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}COPY
Promises API#
History
The fs/promises API provides asynchronous file system methods that return promises.

The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.

Class: FileHandle#
Added in: v10.0.0
A <FileHandle> object is an object wrapper for a numeric file descriptor.

Instances of the <FileHandle> object are created by the fsPromises.open() method.

All <FileHandle> objects are <EventEmitter>s.

If a <FileHandle> is not closed using the filehandle.close() method, it will try to automatically close the file descriptor and emit a process warning, helping to prevent memory leaks. Please do not rely on this behavior because it can be unreliable and the file may not be closed. Instead, always explicitly close <FileHandle>s. Node.js may change this behavior in the future.

Event: 'close'#
Added in: v15.4.0
The 'close' event is emitted when the <FileHandle> has been closed and can no longer be used.

filehandle.appendFile(data[, options])#
History
data <string> | <Buffer> | <TypedArray> | <DataView> | <AsyncIterable> | <Iterable> | <Stream>
options <Object> | <string>
encoding <string> | <null> Default: 'utf8'
Returns: <Promise> Fulfills with undefined upon success.
Alias of filehandle.writeFile().

When operating on file handles, the mode cannot be changed from what it was set to with fsPromises.open(). Therefore, this is equivalent to filehandle.writeFile().

filehandle.chmod(mode)#
Added in: v10.0.0
mode <integer> the file mode bit mask.
Returns: <Promise> Fulfills with undefined upon success.
Modifies the permissions on the file. See chmod(2).

filehandle.chown(uid, gid)#
Added in: v10.0.0
uid <integer> The file's new owner's user id.
gid <integer> The file's new group's group id.
Returns: <Promise> Fulfills with undefined upon success.
Changes the ownership of the file. A wrapper for chown(2).

filehandle.close()#
Added in: v10.0.0
Returns: <Promise> Fulfills with undefined upon success.
Closes the file handle after waiting for any pending operation on the handle to complete.

import { open } from 'node:fs/promises';

let filehandle;
try {
  filehandle = await open('thefile.txt', 'r');
} finally {
  await filehandle?.close();
} COPY
filehandle.createReadStream([options])#
Added in: v16.11.0
options <Object>
encoding <string> Default: null
autoClose <boolean> Default: true
emitClose <boolean> Default: true
start <integer>
end <integer> Default: Infinity
highWaterMark <integer> Default: 64 * 1024
Returns: <fs.ReadStream>
Unlike the 16 KiB default highWaterMark for a <stream.Readable>, the stream returned by this method has a default highWaterMark of 64 KiB.

options can include start and end values to read a range of bytes from the file instead of the entire file. Both start and end are inclusive and start counting at 0, allowed values are in the [0, Number.MAX_SAFE_INTEGER] range. If start is omitted or undefined, filehandle.createReadStream() reads sequentially from the current file position. The encoding can be any one of those accepted by <Buffer>.

If the FileHandle points to a character device that only supports blocking reads (such as keyboard or sound card), read operations do not finish until data is available. This can prevent the process from exiting and the stream from closing naturally.

By default, the stream will emit a 'close' event after it has been destroyed. Set the emitClose option to false to change this behavior.

import { open } from 'node:fs/promises';

const fd = await open('/dev/input/event0');
// Create a stream from some character device.
const stream = fd.createReadStream();
setTimeout(() => {
  stream.close(); // This may not close the stream.
  // Artificially marking end-of-stream, as if the underlying resource had
  // indicated end-of-file by itself, allows the stream to close.
  // This does not cancel pending read operations, and if there is such an
  // operation, the process may still not be able to exit successfully
  // until it finishes.
  stream.push(null);
  stream.read(0);
}, 100); COPY
If autoClose is false, then the file descriptor won't be closed, even if there's an error. It is the application's responsibility to close it and make sure there's no file descriptor leak. If autoClose is set to true (default behavior), on 'error' or 'end' the file descriptor will be closed automatically.

An example to read the last 10 bytes of a file which is 100 bytes long:

import { open } from 'node:fs/promises';

const fd = await open('sample.txt');
fd.createReadStream({ start: 90, end: 99 }); COPY
filehandle.createWriteStream([options])#
Added in: v16.11.0
options <Object>
encoding <string> Default: 'utf8'
autoClose <boolean> Default: true
emitClose <boolean> Default: true
start <integer>
Returns: <fs.WriteStream>
options may also include a start option to allow writing data at some position past the beginning of the file, allowed values are in the [0, Number.MAX_SAFE_INTEGER] range. Modifying a file rather than replacing it may require the flags open option to be set to r+ rather than the default r. The encoding can be any one of those accepted by <Buffer>.

If autoClose is set to true (default behavior) on 'error' or 'finish' the file descriptor will be closed automatically. If autoClose is false, then the file descriptor won't be closed, even if there's an error. It is the application's responsibility to close it and make sure there's no file descriptor leak.

By default, the stream will emit a 'close' event after it has been destroyed. Set the emitClose option to false to change this behavior.

filehandle.datasync()#
Added in: v10.0.0
Returns: <Promise> Fulfills with undefined upon success.
Forces all currently queued I/O operations associated with the file to the operating system's synchronized I/O completion state. Refer to the POSIX fdatasync(2) documentation for details.

Unlike filehandle.sync this method does not flush modified metadata.

filehandle.fd#
Added in: v10.0.0
<number> The numeric file descriptor managed by the <FileHandle> object.
filehandle.read(buffer, offset, length, position)#
Added in: v10.0.0
buffer <Buffer> | <TypedArray> | <DataView> A buffer that will be filled with the file data read.
offset <integer> The location in the buffer at which to start filling.
length <integer> The number of bytes to read.
position <integer> | <null> The location where to begin reading data from the file. If null, data will be read from the current file position, and the position will be updated. If position is an integer, the current file position will remain unchanged.
Returns: <Promise> Fulfills upon success with an object with two properties:
bytesRead <integer> The number of bytes read
buffer <Buffer> | <TypedArray> | <DataView> A reference to the passed in buffer argument.
Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the number of bytes read is zero.

filehandle.read([options])#
Added in: v13.11.0, v12.17.0
options <Object>
buffer <Buffer> | <TypedArray> | <DataView> A buffer that will be filled with the file data read. Default: Buffer.alloc(16384)
offset <integer> The location in the buffer at which to start filling. Default: 0
length <integer> The number of bytes to read. Default: buffer.byteLength - offset
position <integer> | <null> The location where to begin reading data from the file. If null, data will be read from the current file position, and the position will be updated. If position is an integer, the current file position will remain unchanged. Default:: null
Returns: <Promise> Fulfills upon success with an object with two properties:
bytesRead <integer> The number of bytes read
buffer <Buffer> | <TypedArray> | <DataView> A reference to the passed in buffer argument.
Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the number of bytes read is zero.

filehandle.read(buffer[, options])#
Added in: v18.2.0, v16.17.0
buffer <Buffer> | <TypedArray> | <DataView> A buffer that will be filled with the file data read.
options <Object>
offset <integer> The location in the buffer at which to start filling. Default: 0
length <integer> The number of bytes to read. Default: buffer.byteLength - offset
position <integer> The location where to begin reading data from the file. If null, data will be read from the current file position, and the position will be updated. If position is an integer, the current file position will remain unchanged. Default:: null
Returns: <Promise> Fulfills upon success with an object with two properties:
bytesRead <integer> The number of bytes read
buffer <Buffer> | <TypedArray> | <DataView> A reference to the passed in buffer argument.
Reads data from the file and stores that in the given buffer.

If the file is not modified concurrently, the end-of-file is reached when the number of bytes read is zero.

filehandle.readableWebStream(options)#
History
Stability: 1 - Experimental
options <Object>

type <string> | <undefined> Whether to open a normal or a 'bytes' stream. Default: undefined
Returns: <ReadableStream>

Returns a ReadableStream that may be used to read the files data.

An error will be thrown if this method is called more than once or is called after the FileHandle is closed or closing.

import {
  open,
} from 'node:fs/promises';

const file = await 