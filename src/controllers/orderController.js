const Order = require("../models/Order")

exports.createOrder = async (req, res) => {

 try {

  const data = req.body

  const order = new Order({

   orderId: data.numeroPedido,
   value: data.valorTotal,
   creationDate: data.dataCriacao,
   items: data.items.map(item => ({
    productId: item.itemId,
    quantity: item.quantidadeItem,
    price: item.valorItem
   }))

  })

  await order.save()

  res.status(201).json(order)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}


exports.getOrder = async (req, res) => {

 try {

  const order = await Order.findOne({
   orderId: req.params.id
  })

  if (!order) {
   return res.status(404).json({ message: "Pedido não encontrado" })
  }

  res.json(order)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}


exports.listOrders = async (req, res) => {

 try {

  const orders = await Order.find()

  res.json(orders)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}


exports.updateOrder = async (req, res) => {

 try {

  const order = await Order.findOneAndUpdate(
   { orderId: req.params.id },
   req.body,
   { new: true }
  )

  res.json(order)

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}


exports.deleteOrder = async (req, res) => {

 try {

  await Order.findOneAndDelete({
   orderId: req.params.id
  })

  res.json({ message: "Pedido deletado" })

 } catch (error) {

  res.status(500).json({ error: error.message })

 }

}