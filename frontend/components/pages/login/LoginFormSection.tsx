import { FormContainer } from "@/components";
import { Form } from "@/components/pages/login";

const LoginFormSection: React.FC = () => {
  return (
    <section className="max-w-[1400px] w-full mx-auto lg:px-8 md:px-6 px-4 lg:py-14 py-10 space-y-4">
      <FormContainer>
        {/* ==== Form ==== */}
        <Form />
      </FormContainer>
    </section>
  );
};

export default LoginFormSection;
