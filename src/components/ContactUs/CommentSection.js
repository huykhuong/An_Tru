const CommentSection = () => {
  return (
    // Contructive Comment Section
    <section className="px-5 py-10 flex flex-col gap-y-5 md:px-16">
      <h1 className="text-lg xl:text-2xl">Đóng góp ý kiến</h1>
      <p className="paragraph opacity-40">
        Hãy cho chúng tôi biết cảm nhận của bạn về chúng tôi
      </p>
      {/* Fields section */}
      <div className="flex flex-col gap-y-8 mt-5">
        <input placeholder="Họ tên" type="text" className="inputField" />
        <input
          placeholder="Email của bạn"
          type="email"
          className="inputField"
        />
        <input placeholder="Chủ đề" type="text" className="inputField" />
        <textarea
          placeholder="Ý kiến"
          rows="4"
          cols="50"
          className="font-josephin mb-5 bg-transparent border-b-[0.5px] border-opacity-30 focus:outline-none focus:border-b-secondary placeholder-white transition duration-300"
        />
      </div>
      <button className="font-josephin bg-lighter_green py-3 focus:outline-none rounded-sm">
        Gửi ý kiến
      </button>
    </section>
  );
};

export default CommentSection;
