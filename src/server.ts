import server from './app';

server.listen({ port: Number(process.env.PORT || 8080), host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})