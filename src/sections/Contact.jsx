import { useForm } from 'react-hook-form'
import { contactSchemaResolver } from '../schemas/contactSchema'
import ErrorText from '../components/ErrorText'
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: contactSchemaResolver })
  const onSubmit = (data) => console.log(data)

  return (
    <section className="w-[360px] md:w-[600px] mt-14">
      <header className="md:text-2xl text-xl underline font-bold underline-offset-8 mb-4">
        Contact
      </header>
      <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-md w-full border-2 text-lg"
          name="name"
          {...register('name')}
        />
        {errors?.name && <ErrorText text={errors.name.message} />}
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-md w-full border-2 mt-4 text-lg"
          name="email"
          {...register('email')}
        />
        {errors?.email && <ErrorText text={errors.email.message} />}
        <textarea
          placeholder="Message"
          className="textarea textarea-bordered textarea-md w-full border-2 mt-4 text-lg"
          rows="4"
          name="message"
          {...register('message')}
        ></textarea>
        {errors?.message && <ErrorText text={errors.message.message} />}
        <div className="mt-4">
          <button className="btn btn-primary btn-wide">Primary</button>
        </div>
      </form>
    </section>
  )
}
export default Contact
