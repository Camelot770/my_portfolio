'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations';

export function FounderSection() {
  return (
    <section className="min-h-screen bg-[#1a1a2e] text-white relative overflow-hidden">
      <div className="container h-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 min-h-screen items-center py-20"
        >
          {/* Left text */}
          <motion.div variants={fadeInLeft} className="lg:pr-8">
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              Мы верим, что лучшие продукты создаются людьми, которые берут на себя полную ответственность за результат.
            </p>
          </motion.div>

          {/* Center photo */}
          <motion.div variants={fadeInUp} className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/images/my_photo.jpg"
                alt="Наум Коган и Камиль Исхаков"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div variants={fadeInUp} className="lg:pl-8">
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
              StackLab — это не студия с менеджерами и очередью задач. Это два разработчика — Наум Коган и Камиль Исхаков — которые ведут каждый проект от первого разговора до релиза.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mt-6">
              Вы говорите напрямую с теми, кто пишет код. Без посредников, без потерянных требований, без сюрпризов.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mt-6 text-accent">
              Наша цель проста — чтобы вы получили продукт, который работает именно так, как вы задумали.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
