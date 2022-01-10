const ContactInfo = () => {
  return (
    <section>
      <h1 className="text-lg">Thông tin liên hệ</h1>
      <h2 className="font-josephin text-md">
        Địa chỉ:<>&nbsp;</>
        <span className="paragraph">
          230 Nguyễn Sơn, P Phú Thọ Hoà, Q Tân Phú
        </span>
      </h2>
      <h2 className="font-josephin text-md">
        Website:<>&nbsp;</>
        <span className="paragraph">nhahangantru.com</span>
      </h2>
      <h2 className="font-josephin text-md">
        Điện thoại:<>&nbsp;</>
        <span className="paragraph">0909728374</span>
      </h2>
      <h2 className="font-josephin text-md">
        Email:<>&nbsp;</>
        <span className="paragraph text-secondary opacity-100 font-normal">
          <a href="mailto:nhahangantru@gmail.com">nhahangantru@gmail.com</a>
        </span>
      </h2>
    </section>
  );
};

export default ContactInfo;
