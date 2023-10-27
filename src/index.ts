import { PrismaClient } from '@prisma/client'
import { create } from 'domain'

const prisma = new PrismaClient()

async function getCliente() {
    const allClients = await prisma.cliente.findMany({
        include: {
            pedidos: true
        }
    })
    console.log(allClients)
}

async function getCliente2(){
    const allClients = await prisma.cliente.findUnique({
        where: { id: '653bdb8fc30a573a8962bed5' },
        include: {
            pedidos: true
        }
    })
    console.log(allClients);
    
}


async function getPedido() {
    const allPedidos = await prisma.pedido.findMany({
        include: {
            cliente: true,
            ProductoPedido: {
                include: {
                    producto: true
                }
            }
        }

    })
    console.log(allPedidos)
}

async function createClient() {
    const newClient = await prisma.cliente.create({
        data: {
            dni: 41256896,
            nombre: 'chaki',
            apellido: 'chaleco',
            telefono: '3471-562897',
            email: 'jojtsu@gmail.com',
            direccion: 'Entre rios 123'
        },
    })
}

async function updateClient() {
    const updateClient = await prisma.cliente.update({
        where: { id: '653bcd6d3abedcfb61735945' },
        data: { email: 'eldelchaleco@gmail.ar' },
    })
}

async function deleteClient() {
    const deleteClient = await prisma.cliente.delete({
        where: { id: '' },
    })
}


async function updateClient2() {
    const updateClient = await prisma.cliente.update({
        where: { id: '653bdb8fc30a573a8962bed5' },
        data: {
            nombre: 'Germancito',
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
    })
}



async function main() {
    //await createClient()
    
    //--Este get trae todos los todos los clientes sin sus pedidos
    //await getCliente()

    //--Este update cambia el email del cliente
    //await updateClient()

    //--Este update cambia el nombre del cliente y crea un pedido
    //await updateClient2()    

    //--Este get trae un cliente con sus pedidos
    //await getCliente2()

    //--Este get trae todos los pedidos con sus productos y clientes
    //await getPedido()
    console.log('------------------')
    

}

main()
    .catch(async (e) => {
        1
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })