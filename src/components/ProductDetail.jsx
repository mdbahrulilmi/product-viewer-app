import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { useCart } from '../context/CartContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetail({open, setOpen, product}) {
    const { dispatch } = useCart();
    if (!product) return null

    const handleAddToCart = (e) => {
      dispatch({ type: "ADD_ITEM", payload: product });
      setOpen(false);      
    };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <img
                  className="aspect-2/3 w-full rounded-lg bg-white sm:col-span-4 lg:col-span-5 object-contain"
                  src={product.image}
                />
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.title}</h2>
                    <p className="font-bold text-sm text-orange-600 dark:text-orange-600">{product.category}</p>

                  <section aria-labelledby="information-heading" className="mt-2">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <p className="text-lg text-gray-900 text-justify mb-5">{product.description}</p>
                    <p className="text-3xl text-gray-900 font-bold">{product.price}</p>

                    {/* Reviews */}
                    <div className="mt-6">
                      <h4 className="sr-only">Reviews</h4>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                product.rating.rate > rating ? 'text-gray-900' : 'text-gray-200',
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{product.rating.rate} out of 5 stars</p>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          {product.rating.count} reviews
                        </a>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="options-heading" className="mt-10">
                    <h3 id="options-heading" className="sr-only">
                      Product options
                    </h3>

                      <button
                        onClick={handleAddToCart}
                        className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                      >
                        ADD TO CART
                      </button>
                    
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}