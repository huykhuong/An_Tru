const ContactInfo = () => {
  return (
    // Contact Info
    <section className="px-5 py-10 flex flex-col gap-y-5 md:px-16">
      <h1 className="text-lg xl:text-2xl">Thông tin liên hệ</h1>
      <h2 className="font-josephin text-[16px]">
        Địa chỉ:<>&nbsp;</>
        <span className="contactInfo">
          230 Nguyễn Sơn, P Phú Thọ Hoà, Q Tân Phú
        </span>
      </h2>
      <h2 className="font-josephin text-[16px]">
        Website:<>&nbsp;</>
        <span className="contactInfo">nhahangantru.com</span>
      </h2>
      <h2 className="font-josephin text-[16px]">
        Điện thoại:<>&nbsp;</>
        <span className="contactInfo">0909728374</span>
      </h2>
      <h2 className="font-josephin text-[16px]">
        Email:<>&nbsp;</>
        <span className="contactInfo">
          <a href="mailto:nhahangantru@gmail.com">nhahangantru@gmail.com</a>
        </span>
      </h2>
    </section>
  );
};

export default ContactInfo;
