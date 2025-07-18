import React from 'react';

function MentorNetwork() {
  const mentors = [
    {
      id: 1,
      name: 'David Tan',
      role: 'Founding Partner, CoreVC',
      isMain: true,
    },
    {
      id: 2,
      name: '',
      role: '',
      isMain: false,
    },
    {
      id: 3,
      name: '',
      role: '',
      isMain: false,
    },
    {
      id: 4,
      name: '',
      role: '',
      isMain: false,
    },
    {
      id: 5,
      name: '',
      role: '',
      isMain: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            Mentor & Expert
            <br />
            Network
          </h1>
          <p className="text-xl text-gray-300 max-w-md ml-auto">
            Our mentor and expert network is the backbone of our incubation
            journey.
          </p>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className={`${
                mentor.isMain ? 'md:col-span-2 lg:col-span-1' : ''
              } bg-gray-200 rounded-3xl p-8 aspect-square flex flex-col justify-between relative overflow-hidden group hover:bg-gray-100 transition-all duration-300`}
            >
              {/* Placeholder image icon */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-400 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-12 h-12 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {!mentor.isMain && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Mentor Info */}
              {mentor.isMain && (
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-600 text-lg">{mentor.role}</p>
                </div>
              )}

              {/* Hover effect for empty cards */}
              {!mentor.isMain && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with industry leaders, successful entrepreneurs, and domain
            experts who provide strategic guidance and mentorship throughout
            your startup journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MentorNetwork;
