'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const t = useTranslations('footer');
  const tc = useTranslations('common');
  const tn = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <Link href={`/${locale}`} className="text-2xl font-extrabold tracking-tighter">
                <span className="gradient-text">ESC</span>
                <span> WEAR</span>
              </Link>
              <p className="mt-4 text-muted text-sm leading-relaxed">
                {t('description')}
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.instagram.com/esc.wear_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-coral transition-colors">
                  <InstagramIcon size={20} />
                </a>
                <a href="https://www.tiktok.com/@esc.wear_" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-coral transition-colors">
                  <TikTokIcon size={20} />
                </a>
                <a href="https://www.facebook.com/share/1G7ZvnUBzP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-coral transition-colors">
                  <FacebookIcon size={20} />
                </a>
                <a href="https://wa.me/201022123004" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-coral transition-colors">
                  <WhatsAppIcon size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li><Link href={`/${locale}/shop`} className="hover:text-foreground transition-colors">{tn('shop')}</Link></li>
                <li><Link href={`/${locale}/about`} className="hover:text-foreground transition-colors">{tn('about')}</Link></li>
                <li><Link href={`/${locale}/contact`} className="hover:text-foreground transition-colors">{tn('contact')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">{t('customerService')}</h4>
              <ul className="space-y-3 text-sm text-muted">
                <li><a href="#" className="hover:text-foreground transition-colors">{t('shippingInfo')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('returns')}</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">{t('faq')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">{t('stayConnected')}</h4>
              <p className="text-sm text-muted mb-4">{t('newsletterText')}</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="flex-1 bg-surface-light border border-border rounded-full px-4 py-2 text-sm outline-none focus:border-coral transition-colors"
                />
                <button className="gradient-coral-teal text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  {tc('apply')}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>&copy; {new Date().getFullYear()} ESC Wear. {tc('allRightsReserved')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">{tc('privacyPolicy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{tc('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
