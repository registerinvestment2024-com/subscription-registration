import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    usdtAddress: "",
    phone: "",
    amount: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Neon Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 p-8">
          {!submitted ? (
            <>
              <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 animate-pulse">
                طريقة الاشتراك
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field 1: Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-cyan-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-pink-400 text-xl">(1)</span>
                    الاسم الرباعي:
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-black/50 border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-lg h-12"
                    placeholder="أدخل اسمك الرباعي"
                  />
                </div>

                {/* Field 2: USDT Address */}
                <div className="space-y-2">
                  <Label htmlFor="usdtAddress" className="text-cyan-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-pink-400 text-xl">(2)</span>
                    عنوان محفظتك USDT لتلقي الأرباح:
                  </Label>
                  <Input
                    id="usdtAddress"
                    name="usdtAddress"
                    type="text"
                    required
                    value={formData.usdtAddress}
                    onChange={handleChange}
                    className="bg-black/50 border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-lg h-12"
                    placeholder="أدخل عنوان محفظة USDT"
                  />
                </div>

                {/* Field 3: Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-cyan-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-pink-400 text-xl">(3)</span>
                    رقم الجوال:
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-lg h-12"
                    placeholder="أدخل رقم الجوال"
                  />
                </div>

                {/* Field 4: Amount */}
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-cyan-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-pink-400 text-xl">(4)</span>
                    المبلغ المراد الاشتراك به:
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                    className="bg-black/50 border-2 border-cyan-500/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all text-lg h-12"
                    placeholder="أدخل المبلغ"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-xl py-6 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all border-2 border-cyan-400/50"
                >
                  تأكيد الاشتراك
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-12 space-y-6">
              <CheckCircle2 className="w-32 h-32 text-green-400 mx-auto animate-bounce" />
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                ألف مبروك تم الاشتراك
              </h2>
              <p className="text-2xl text-cyan-300 font-semibold">
                حصلت على 20$ ربح ترحيبي
              </p>
              <div className="mt-8">
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg px-8 py-4"
                >
                  اشتراك جديد
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
