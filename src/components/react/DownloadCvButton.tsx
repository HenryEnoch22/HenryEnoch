import { useLanguage } from "../../i18n/store";

export default function DownloadCVButton() {
  const { t } = useLanguage();

  return (
    <a
      href="/cv/Henry_Enoch_Francisco_Vazquez_CV.pdf"
      download
      className="
        inline-flex items-center gap-2
        mt-8
        bg-blue-500 hover:bg-blue-700
        text-white
        px-7 py-3
        rounded-full
        font-semibold
        transition-all
        shadow-md hover:shadow-lg hover:-translate-y-0.5
      "
    >
      <i className="fa-solid fa-download"></i>
      {t.hero.downloadCv}
    </a>
  );
}
