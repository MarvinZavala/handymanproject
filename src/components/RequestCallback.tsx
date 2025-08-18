'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Clock } from 'lucide-react';

const callbackSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  bestTime: z.string().min(1, 'Please select your preferred time'),
  message: z.string().optional(),
});

type CallbackForm = z.infer<typeof callbackSchema>;

interface RequestCallbackProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestCallback({ isOpen, onClose }: RequestCallbackProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CallbackForm>({
    resolver: zodResolver(callbackSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      bestTime: '',
      message: '',
    },
  });

  const onSubmit = async (data: CallbackForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Callback request:', data);
    
    toast.success(
      'Request sent! We\'ll call you back within 30 minutes. We\'re available 24/7!',
      { duration: 5000 }
    );
    
    setIsSubmitting(false);
    form.reset();
    onClose();
    
    // In production, redirect to thank you page
    window.location.href = '/thank-you';
  };

  const services = [
    'Plumbing Repair',
    'Water Heater Service',
    'Drain Cleaning',
    'Leak Detection',
    'Faucet Installation',
    'Toilet Repair/Installation',
    'Emergency Service',
    'Other'
  ];

  const timeOptions = [
    'ASAP / Emergency',
    'Within 2 hours',
    'Today',
    'Tomorrow',
    'This week',
    'Next week',
    'I\'m flexible'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-brand-navy">
            <Phone className="w-5 h-5 text-brand-gold" />
            <span>Request a Free Callback</span>
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll call you back within 30 minutes. We're available 24/7! 
            For immediate assistance, please call us directly at (510) 926-7272.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="(510) 555-0123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Needed *</FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bestTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>When do you need service? *</span>
                  </FormLabel>
                  <FormControl>
                    <select 
                      {...field} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    >
                      <option value="">Select timeframe...</option>
                      {timeOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the issue or provide any additional information..."
                      className="resize-none"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-brand-gold hover:bg-brand-gold-dark text-white"
              >
                {isSubmitting ? 'Sending...' : 'Request Callback'}
              </Button>
            </div>

            <div className="text-xs text-gray-500 text-center pt-2">
              By submitting this form, you agree to receive callback and text messages. 
              Message rates may apply. You can opt out anytime.
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}