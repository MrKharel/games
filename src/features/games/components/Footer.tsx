export const Footer = () => {
	return (
		<footer className="mt-25 lg:mt-50 border-t border-black/8 dark:border-white/8 bg-primary-50 dark:bg-white/2">
			<div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-14 flex flex-col gap-12">
				<section className="flex flex-col sm:flex-row justify-between gap-10">
					<div className="flex flex-col gap-3 max-w-xs">
						<span className="text-lg font-title tracking-tighter text-black dark:text-white/90">funlittlegames</span>
						<p className="text-sm text-black/60 dark:text-white/50 tracking-wide">
							Made for fun! For you to have lods of fun.
						</p>
					</div>

					<div className="flex flex-wrap gap-12 sm:gap-16">
						<div className="flex flex-col gap-3">
							<span className="text-sm font-medium text-black/40 dark:text-white/35 uppercase tracking-wide">
								Explore
							</span>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								Games
							</a>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								Coming Soon
							</a>
						</div>

						<div className="flex flex-col gap-3">
							<span className="text-sm font-medium text-black/40 dark:text-white/35 uppercase tracking-wide">
								Company
							</span>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								About
							</a>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								Contact
							</a>
						</div>

						<div className="flex flex-col gap-3">
							<span className="text-sm font-medium text-black/40 dark:text-white/35 uppercase tracking-wide">
								Legal
							</span>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								Privacy
							</a>
							<a
								href="#"
								className="text-sm text-black/70 dark:text-white/65 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
								Terms
							</a>
						</div>
					</div>
				</section>

				<section className="pt-6 border-t border-black/6 dark:border-white/6 flex flex-col sm:flex-row justify-between items-center gap-4">
					<span className="text-xs text-black/40 dark:text-white/35">
						{new Date().getFullYear()} funlittlegames. Open Source.
					</span>
					<div className="flex gap-5">
						<a
							href="#"
							className="text-xs text-black/50 dark:text-white/40 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
							Twitter
						</a>
						<a
							href="#"
							className="text-xs text-black/50 dark:text-white/40 hover:text-primary-500 dark:hover:text-primary-300 transition-colors">
							Discord
						</a>
					</div>
				</section>
			</div>
		</footer>
	);
};
