import React from 'react'
import ServiceCards from './ServiceCards'
import { motion } from 'framer-motion'

const ServicesCards = () => {
  return (
    <section className='flex flex-col items-center w-full py-10 mt-20 text-white'>
      <div className='flex justify-center w-full px-4 pt-10 pb-32 text-center md:pt-20 md:pb-40 bg-tealGreen'>
        <div className='text-4xl font-bold'>Services Provides By Us</div>
      </div>
      <div className='flex flex-col justify-center gap-6 -mt-20 md:flex-row md:flex-wrap text-tealGreen'>
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServiceCards
            name='Electricity'
            description=' Since the deregulation in the energy market, many changes have taken
          place with the most significant one is the price increases.'
          />
        </motion.div>

        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServiceCards
            name='Gas'
            description=' Since the deregulation in the energy market, many changes have taken
            place with the most significant one is the price increases.'
          />
        </motion.div>

        {/* card 3 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ServiceCards
            name='Water'
            description='  From April 2017, the laws changed allowing business & charities to
          seek better deals for water.'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesCards
