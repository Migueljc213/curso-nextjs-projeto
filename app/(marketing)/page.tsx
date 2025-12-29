"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transation: { staggerChildren: 0.3 }, // Para cada Filho vai entrar 0.3segundos
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-950 text-white  gap-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Começa invisivel e 50px para baixo
        animate={{ opacity: 1, y: 0 }} // termina visivel e no posição original
        transition={{ duration: 0.8 }} // leva 0.8 segundos para fazer a animação
        className="flex flex-col items-center justify-center p-8"
      >
        <h1 className="text-4xl font-blod mb-4">Boas Práticas de UI</h1>
        <p className="text-xl font-bold mb-4">
          Animações não são apenas enfeite. eles serve para guiar o olhar do
          usuário
        </p>
      </motion.div>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-2 space-y-2 w-full max-w-md"
      >
        {[1, 2, 3].map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="bg-gray-500 p-4 rounded shadow-sm"
          >
            Item da Lista: {item}
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "#3b8" }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-blue-500 text-white px-8 py-4 rounded-full font-bold cursor-pointer"
      >
        Clique em mim
      </motion.button>
    </div>
  );
}
