export const useWhatsAppRedirection = () => {
  const wpLink = "https://w.app/KwnJB0";

  const handleRedirect = () => {
    window.open(wpLink, "_blank");
  };

  return { handleRedirect };
};
