import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      orderNumber,
      customer,
      items,
      subtotal,
      shipping,
      total,
      delivery,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemsList = items
      .map(
        (item: any) =>
          `${item.name}
Cap: ${item.cap || "Nozzle Applicator Cap"}
Quantity: ${item.quantity}
Price: Rs. ${item.price * item.quantity}`
      )
      .join("\n\n");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🛍 New Order - ${orderNumber}`,

      text: `
NEW ORDER RECEIVED

====================================

Order Number:
${orderNumber}

====================================

Customer Name:
${customer.fullName}

Phone:
${customer.phone}

Email:
${customer.email}

Address:
${customer.address}

City:
${customer.city}

Province:
${customer.province}

Postal Code:
${customer.postalCode}

====================================

ITEMS ORDERED:

${itemsList}

====================================

Subtotal: Rs. ${subtotal}
Shipping: Rs. ${shipping}
Total: Rs. ${total}

Delivery:
${delivery}

Payment Method:
Cash on Delivery

Status:
Pending

====================================
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}