import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function getCliente() {
    const allClients = await prisma.cliente.findMany();
    console.log(allClients);
}
async function getPedido() {
    const allPedidos = await prisma.pedido.findMany();
    console.log(allPedidos);
}
async function createClient() {
    const newClient = await prisma.cliente.create({
        data: {
            dni: 41256896,
            nombre: 'Josue',
            apellido: 'Scocco',
            telefono: '3471-562897',
            email: 'jojtsu@gmail.com',
            direccion: 'Entre rios 123'
        },
    });
}
async function updateClient() {
    const updateClient = await prisma.cliente.update({
        where: { id: '653b27b2533e19b78a745fe9' },
        data: { nombre: 'Juan' },
    });
}
async function deleteClient() {
    const deleteClient = await prisma.cliente.delete({
        where: { id: '' },
    });
}
async function updateClient2() {
    const updateClient = await prisma.cliente.update({
        where: { id: '653b27b2533e19b78a745fe9' },
        data: {
            nombre: 'Juan',
            pedidos: {
                createMany: {
                    data: [
                        {
                            fechaPedido: new Date(),
                        }
                    ]
                }
            },
        },
    });
}
async function main() {
    await getPedido();
    // await createClient()
    // await getCliente()
    // await updateClient2()
    // await getCliente()
}
main()
    .catch(async (e) => {
    1;
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map