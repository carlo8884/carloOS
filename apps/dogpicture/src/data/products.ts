/**
 * DogPicture.com — Product Catalog
 *
 * Pricing per V2 §3.6 brief:
 *   digital        $9
 *   mug            $25
 *   t-shirt        $35
 *   canvas         $59
 *   blanket        $69
 *   framed-print   $89
 *   bundle:digital-canvas  $35  (savings vs $9 + $59 = $68 à la carte)
 *
 * `printifyBlueprintId` / `printifyVariantId` are placeholders. Replace
 * with the real IDs from your Printify catalog once the API key is wired.
 */

export type ProductType =
  | 'digital_only'
  | 'mug'
  | 'tshirt'
  | 'canvas'
  | 'blanket'
  | 'framed_print'
  | 'bundle_digital_canvas'

export interface Product {
  id: ProductType
  name: string
  description: string
  priceCents: number
  /** True if Printify fulfillment kicks in on checkout.session.completed. */
  physical: boolean
  /** Placeholder Printify blueprint id — replace with real value at go-live. */
  printifyBlueprintId?: number
  printifyVariantId?: number
}

export const PRODUCTS: Record<ProductType, Product> = {
  digital_only: {
    id: 'digital_only',
    name: 'Digital Download',
    description: 'High-resolution PNG, emailed in minutes. Print at home or share anywhere.',
    priceCents: 900,
    physical: false,
  },
  mug: {
    id: 'mug',
    name: 'Ceramic Mug',
    description: '11oz white ceramic mug with your portrait wrapped around it. Dishwasher safe.',
    priceCents: 2500,
    physical: true,
    printifyBlueprintId: 9, // placeholder
    printifyVariantId: 33719,
  },
  tshirt: {
    id: 'tshirt',
    name: 'T-Shirt',
    description: 'Soft cotton tee with your portrait on the chest. Sizes S–3XL.',
    priceCents: 3500,
    physical: true,
    printifyBlueprintId: 6,
    printifyVariantId: 11898,
  },
  canvas: {
    id: 'canvas',
    name: 'Stretched Canvas',
    description: '12x16in gallery-wrap canvas. Ready to hang, museum-quality print.',
    priceCents: 5900,
    physical: true,
    printifyBlueprintId: 68,
    printifyVariantId: 41573,
  },
  blanket: {
    id: 'blanket',
    name: 'Throw Blanket',
    description: '50x60in plush microfiber blanket. Cozy keepsake for the couch.',
    priceCents: 6900,
    physical: true,
    printifyBlueprintId: 257,
    printifyVariantId: 47842,
  },
  framed_print: {
    id: 'framed_print',
    name: 'Framed Print',
    description: '11x14in fine-art print in a solid wood frame. Hand-mounted, ready to hang.',
    priceCents: 8900,
    physical: true,
    printifyBlueprintId: 282,
    printifyVariantId: 48516,
  },
  bundle_digital_canvas: {
    id: 'bundle_digital_canvas',
    name: 'Digital + Canvas Bundle',
    description: 'Save vs ordering separately — get the digital download and the canvas together.',
    priceCents: 3500,
    physical: true,
    printifyBlueprintId: 68,
    printifyVariantId: 41573,
  },
}

export const PRODUCT_LIST: Product[] = Object.values(PRODUCTS)

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`
}
