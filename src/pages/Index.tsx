
import { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, DollarSign, Filter, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  const jobListings = [
    {
      id: 1,
      title: "Amazon Delivery Station Warehouse Associate",
      company: "Amazon Warehouse",
      location: "Hattiesburg, MS 39401",
      country: "United States",
      salary: "$18.50 an hour",
      type: "Part-time",
      schedule: "Flextime",
      rating: 3.4,
      description: "Join our fast-paced warehouse team and help deliver packages to customers across the region.",
      requirements: ["Must be 18+ years old", "Ability to lift 50lbs", "Reliable transportation"],
      posted: "2 days ago",
      applyLink: "https://www.amazon.jobs/en/jobs/warehouse"
    },
    {
      id: 2,
      title: "Amazon Sortation Center Warehouse Associate",
      company: "Amazon Warehouse", 
      location: "Jefferson, GA 30549",
      country: "United States",
      salary: "$17.00 an hour",
      type: "Full-time",
      schedule: "Night shift",
      rating: 3.6,
      description: "Sort and organize packages in our state-of-the-art sortation facility.",
      requirements: ["High school diploma", "Physical stamina", "Team player"],
      posted: "1 day ago",
      applyLink: "https://www.amazon.jobs/en/jobs/warehouse"
    },
    {
      id: 3,
      title: "Customer Support Specialist, Luxury Stores",
      company: "Amazon.com Services LLC",
      location: "Remote",
      country: "United States",
      salary: "$22.00 an hour",
      type: "Full-time",
      schedule: "Work from home",
      rating: 4.2,
      description: "Provide exceptional customer service for our luxury brand partners.",
      requirements: ["Bachelor's degree preferred", "Excellent communication", "Customer service experience"],
      posted: "3 days ago",
      applyLink: "https://www.amazon.jobs/en/jobs/customer-service"
    },
    {
      id: 4,
      title: "Amazon Fulfillment Center Warehouse Associate",
      company: "Amazon Warehouse",
      location: "Akron, OH 44320",
      country: "United States",
      salary: "$19.25 an hour",
      type: "Full-time",
      schedule: "Day shift",
      rating: 3.8,
      description: "Pick, pack, and ship orders in our modern fulfillment center.",
      requirements: ["Physical ability required", "Attention to detail", "Safety focused"],
      posted: "4 days ago",
      applyLink: "https://www.amazon.jobs/en/jobs/warehouse"
    },
    {
      id: 5,
      title: "Investigation Associate",
      company: "Amazon",
      location: "Remote",
      country: "United States",
      salary: "$25.00 an hour",
      type: "Full-time",
      schedule: "Standard hours",
      rating: 4.1,
      description: "Investigate and resolve complex issues to protect Amazon and our customers.",
      requirements: ["Strong analytical skills", "Problem-solving ability", "Detail oriented"],
      posted: "1 week ago",
      applyLink: "https://www.amazon.jobs/en/jobs/investigation"
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "Google",
      location: "Toronto, ON, Canada",
      country: "Canada",
      salary: "$85,000 - $120,000",
      type: "Full-time",
      schedule: "Standard hours",
      rating: 4.5,
      description: "Join our engineering team to build innovative solutions that impact millions of users worldwide.",
      requirements: ["Bachelor's in Computer Science", "3+ years experience", "Strong coding skills"],
      posted: "2 days ago",
      applyLink: "https://careers.google.com/jobs/"
    },
    {
      id: 7,
      title: "Marketing Coordinator",
      company: "Microsoft",
      location: "London, UK",
      country: "United Kingdom",
      salary: "£35,000 - £45,000",
      type: "Full-time",
      schedule: "Standard hours",
      rating: 4.3,
      description: "Support marketing campaigns and help drive brand awareness in the European market.",
      requirements: ["Marketing degree", "2+ years experience", "Excellent communication"],
      posted: "5 days ago",
      applyLink: "https://careers.microsoft.com/us/en"
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesTitle = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = location === '' || 
      job.location.toLowerCase().includes(location.toLowerCase()) ||
      job.country.toLowerCase().includes(location.toLowerCase());
    
    return matchesTitle && matchesLocation;
  });

  const handleSearch = () => {
    console.log('Searching for:', { searchQuery, location });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">JobSeeker</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Post a Job</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Next
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Dream Job</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover thousands of job opportunities from top companies. Start your career journey today.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="City, state, zip code, or country"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Search className="h-5 w-5 mr-2" />
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              <Filter className="h-4 w-4 mr-2" />
              Date posted
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              Salary
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              Job type
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              Experience level
            </Button>
            <Button variant="outline" size="sm" className="hover:bg-blue-50">
              Remote
            </Button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {filteredJobs.length} Jobs Found
            </h3>
            <p className="text-gray-600">
              {location ? `Jobs in "${location}"` : 'All locations'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-[1.02] bg-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="font-medium">{job.company}</span>
                        <div className="flex items-center ml-3">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm">{job.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {job.posted}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {job.salary}
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      <Briefcase className="h-3 w-3 mr-1" />
                      {job.type}
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.schedule}
                    </Badge>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(job.applyLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="hover:bg-gray-50">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found for your search criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your search terms or location.</p>
            </div>
          )}

          {/* Load More */}
          {filteredJobs.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="hover:bg-blue-50">
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="h-6 w-6" />
                <span className="text-xl font-bold">JobSeeker</span>
              </div>
              <p className="text-gray-400">
                Your gateway to career opportunities worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Advice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume Builder</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Talent Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JobSeeker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
