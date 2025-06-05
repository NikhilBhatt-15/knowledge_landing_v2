import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Download } from "lucide-react";
import { CustomAndroidIcon, CustomAppleIcon } from "./CustomIcons";

interface DownloadModalProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

// CustomAppleIcon.tsx

export const DownloadModal = ({
  children,
  open,
  onOpenChange,
}: DownloadModalProps) => {
  const downloadOptions = [
    {
      platform: "App Store",
      icon: CustomAppleIcon,
      // Apple: black to gray gradient, white text
      gradient: "from-[#000000] to-[#434343]",
      text: "Download on the",
      subtext: "App Store",
      link: "https://testflight.apple.com/join/xhzmTnHr",
      iconColor: "text-white",
    },
    {
      platform: "Google Play",
      icon: CustomAndroidIcon,
      // Google Play: green to blue gradient, white text
      gradient: "from-[#34A853] to-[#4285F4]",
      text: "Get it on",
      subtext: "Google Play",
      link: "https://play.google.com/store/apps/details?id=com.knowhistory_knowledge.app",
      iconColor: "text-white",
    },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-w-md w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#242B7A]/95 backdrop-blur-md border border-[#D4E333]/30 text-white shadow-xl focus:outline-none p-0">
          <div className="p-6">
            <Dialog.Title className="text-center text-2xl font-bold bg-gradient-to-r from-[#D4E333] to-[#CFABFA] bg-clip-text text-transparent mb-4">
              Download Know[ledge]
            </Dialog.Title>
            <motion.div
              className="space-y-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {downloadOptions.map((option, index) => (
                <motion.a
                  key={option.platform}
                  href={option.link}
                  className="block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`bg-gradient-to-r ${option.gradient} p-4 rounded-xl flex items-center space-x-4 hover:shadow-lg transition-all duration-300`}
                  >
                    <option.icon className={`w-10 h-10 ${option.iconColor}`} />
                    <div className="flex-1">
                      <p className="text-sm text-white">{option.text}</p>
                      <p className="text-lg font-bold text-white">
                        {option.subtext}
                      </p>
                    </div>
                    <Download className="w-5 h-5 text-white/70" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              className="pt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-gray-400">
                Available on all devices • Free to download
              </p>
            </motion.div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DownloadModal;
