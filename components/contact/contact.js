import classes from './contact.module.css'

export default function ContactForm() {
	return (
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Name</label>
						<input
							type='text'
							id='email'
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='message'>Your Name</label>
						<textarea
							type='text'
							id='message'
							rows='5'
						></textarea>
					</div>
				</div>

				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	)
}
